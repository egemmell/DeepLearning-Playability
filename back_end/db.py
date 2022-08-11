import psycopg2

dbconn = {
    "database": 'postgres',
    "user": 'postgres',
    "password": "postgres",
    "host": "localhost",
    "port": 5432, #changed from port to db_port
}

pg_conn = psycopg2.connect(**dbconn)
pg_cur = pg_conn.cursor()

print("hello")