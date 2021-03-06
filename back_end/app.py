from flask import Flask
from flask_cors import CORS, cross_origin
import json
from flask import jsonify, request
import psycopg2
import os

app = Flask(__name__)
# CORS(app, support_credentials=True, resources={r"/*": {"origins": "*"}})
# CORS(app, resources={r"/*": {"origins": [os.getenv("db_host") + ':3000']}})
CORS(app, support_credentials=True, resources={r"/*": {"origins": "*"}})
CORS(
    app,
    resources={r"/*": {"origins": "*",
                       "allow_headers": "*", "expose_headers": "*"}},
)
CORS(app, resources={r"/*"})
app.config["DEBUG"] = True


@app.route("/post_data", methods=["POST"])
def post_data():
    print(json.loads(request.data))
    insert_rating(json.loads(request.data))
    return jsonify({"step": "1"})


@app.route("/post_credential", methods=["POST"])
def post_credential():
    print(json.loads(request.data))
    print("This is from /post_credential!")
    insert_cred(json.loads(request.data))
    return (json.loads(request.data))


@app.route("/get_data", methods=["GET"])
def get_data():
    print("THIS IS TRYING TO PRINT from /get_data")
    meta = get_image()
    response = jsonify(meta)
    print(response)

    return response


dbconn = {
    "database": 'postgres',
    "user": 'postgres',
    "password": os.getenv("db_root_password"),
    "host": os.getenv("db_host"),
    "port": os.getenv("port"),
}
# dbconn = {'database': os.getenv("db"),
#           'user': os.getenv("db_user"),
#           'port': os.getenv("port")}

pg_conn = psycopg2.connect(**dbconn)
pg_cur = pg_conn.cursor()


def get_image():
    sql = """select * from public.playscore ORDER
                        BY random() LIMIT 20
           """
    pg_cur.execute(sql)
    data = pg_cur.fetchall()
    print("TEST")
    return data


def insert_rating(data):
    sql = """insert into public.perceptions
            select img_1, img_2, perception, choice, user_id, time
            from json_to_recordset(%s) x (img_1 varchar(60),
                                          img_2 varchar(60), 
                                          perception varchar(60),
                                          choice varchar(60), 
                                          user_id varchar(100),
                                          time varchar(100)
            )
        """
    pg_cur.execute(sql, (json.dumps([data]),))
    pg_conn.commit()


def insert_cred(data):
    sql = """insert into participants.credentials
            select gender, age, postalcode, childage
            from json_to_recordset(%s) x (gender varchar(45),
                                            age integer,
                                            postalcode varchar(20),
                                            childage integer
            )
    """
    pg_cur.execute(sql, (json.dumps([data]),))
    pg_conn.commit()


if __name__ == "__main__":
    app.run(host="localhost", port="5000")

# {console.log(meta.panoid)}
