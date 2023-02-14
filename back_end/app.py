from flask import Flask
from flask_cors import CORS, cross_origin
import json
from flask import jsonify, request
import psycopg2
from psycopg2 import Error
import os

app = Flask(__name__)
# CORS(app, support_credentials=True, resources={r"/*": {"origins": "*"}})
# CORS(app, resources={r"/*": {"origins": [os.getenv("db_host") + ':3000']}})
#CORS(app, support_credentials=True, resources={r"/*": {"origins": "*"}})
CORS(app, resources={r"/*": {"origins": "*"}})
app.config["DEBUG"] = True


@app.route("/post_data", methods=["POST"])
def post_data():
    print("This is from /POST_DATA!")
    print(json.loads(request.data))
    
    insert_rating(json.loads(request.data))
    return jsonify({"step": "1"})


@app.route("/post_credential", methods=["POST"])
def post_credential():
    
    print("This is from /POST_CREDENTIAL!")
    print(json.loads(request.data))
    
    insert_cred(json.loads(request.data))
    return (json.loads(request.data))

@app.route("/post_credential_child", methods=["POST"])
def post_credential_child():
    
    print("This is from /POST_CREDENTIAL_CHILD!")
    print(json.loads(request.data))
    
    insert_cred_child(json.loads(request.data))
    return (json.loads(request.data))

@app.route("/get_data", methods=["GET"])
def get_data():
    print("THIS IS TRYING TO PRINT from /get_data")
    meta = get_image()
    response = jsonify(meta)
    #response.headers['Access-Control-Allow-Origin'] = '*'
    response.headers['Access-Control-Allow-Origin'] = '*'
    response.headers['Access-Control-Allow-Headers']= "*"
    response.headers['Access-Control-Allow-Methods']= "*"
    print(response.headers)

    return response


dbconn = {
    "database": 'postgres',
    "user": 'postgres',
    "password": os.getenv("db_root_password"),
    "host": os.getenv("db_host"),
    "port": os.getenv("db_port"), #changed from port to db_port
}
# dbconn = {'database': os.getenv("db"),
#           'user': os.getenv("db_user"),
#           'port': os.getenv("port")}

# pg_conn = psycopg2.connect(**dbconn)
# pg_cur = pg_conn.cursor()


def get_image():
    try:
        print(os.getenv("db_host"))
        print(os.getenv("db_port"))
        pg_conn = psycopg2.connect(**dbconn)
        
        pg_cur = pg_conn.cursor()
        print(pg_conn.get_dsn_parameters())
        sql = """select * from public.playscore ORDER
                            BY random() LIMIT 20
            """
        pg_cur.execute(sql)
        data = pg_cur.fetchall()
        pg_conn.commit()
        pg_conn.close()
        print("get_data without exception")
    except (Exception, Error) as e:
        print(e)
        pg_conn = psycopg2.connect(**dbconn)
        pg_cur = pg_conn.cursor()
        sql = """select * from public.playscore ORDER
                            BY random() LIMIT 20
            """
        pg_cur.execute(sql)
        data = pg_cur.fetchall()
        pg_conn.commit()
        pg_conn.close()
        print("get_data from exception case")
    return data

def insert_rating(data):
    try:
        pg_conn = psycopg2.connect(**dbconn)
        pg_cur = pg_conn.cursor()
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
        pg_conn.close()
    except Exception as e:
        print(e)
        pg_conn = psycopg2.connect(**dbconn)
        pg_cur = pg_conn.cursor()
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
        pg_conn.close()

def insert_cred(data):
    try:
        pg_conn = psycopg2.connect(**dbconn)
        pg_cur = pg_conn.cursor()
        sql = """insert into public.parentdemographics
                select user_id, age, parent_child, gender, fsa
                from json_to_recordset(%s) x (user_id varchar(100),
                                            age varchar(100),
                                            parent_child varchar(100),
                                            gender varchar(100),
                                            fsa varchar(100)
                )
        """
        pg_cur.execute(sql, (json.dumps([data]),))
        pg_conn.commit()
        pg_conn.close()
    
    except Exception as e:
        print(e)
        pg_conn = psycopg2.connect(**dbconn)
        pg_cur = pg_conn.cursor()
        sql = """insert into public.parentdemographics
                select user_id, age, parent_child, gender, fsa
                from json_to_recordset(%s) x (user_id varchar(100),
                                            age varchar(100),
                                            parent_child varchar(100),
                                            gender varchar(100),
                                            fsa varchar(100)
                )
        """
        pg_cur.execute(sql, (json.dumps([data]),))
        pg_conn.commit()
        pg_conn.close()

def insert_cred_child(data):
    try:
        pg_conn = psycopg2.connect(**dbconn)
        pg_cur = pg_conn.cursor()
        sql = """insert into public.childdemographics
                select user_id, age, gender, fsa
                from json_to_recordset(%s) x (user_id varchar(100),
                                            age varchar(100),
                                            parent_child varchar(100),
                                            gender varchar(100),
                                            fsa varchar(100)
                )
        """
        pg_cur.execute(sql, (json.dumps([data]),))
        pg_conn.commit()
        pg_conn.close()
    
    except Exception as e:
        print(e)
        pg_conn = psycopg2.connect(**dbconn)
        pg_cur = pg_conn.cursor()
        sql = """insert into public.childdemographics
                select user_id, age, gender, fsa
                from json_to_recordset(%s) x (user_id varchar(100),
                                            age varchar(100),
                                            parent_child varchar(100),
                                            gender varchar(100),
                                            fsa varchar(100)
                )
        """
        pg_cur.execute(sql, (json.dumps([data]),))
        pg_conn.commit()
        pg_conn.close()

if __name__ == "__main__":
    app.run(host=os.getenv("app_host"), port="5000")

