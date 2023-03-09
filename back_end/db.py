import psycopg2

dbconn = {
    "database": 'postgres',
    "user": 'postgres',
    "password": "postgres",
    "host": "localhost",
    "port": 5432,
}

pg_conn = psycopg2.connect(**dbconn)
pg_cur = pg_conn.cursor()
