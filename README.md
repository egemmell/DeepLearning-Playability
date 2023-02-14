# Creating and Deploying the Web-App using Flask, React and Postgresql
In this section, we will go through the necessary steps for creating a web-application using React front-end and Flask back-end. Our database of images and perception rating will be hosted in postgres. After which, we will deploy the entire app using Digital Ocean Droplet and Kubernetes services.



## Summary 
1. Postgres Database
2. Flask API for back-end
3. React for front-end
4. Google Street View API key

## Requirements
* postgres
* flask, psycopg2, flask-cors
* node.js, react-youtube, react-bootstrap
 
### Postgres DB
Install postgres: https://www.postgresql.org/download/.

Create DB 'example' as user postgres.

Dump example data:
```
web-app/sql$ psql -U postgres example < ratings
web-app/sql$ psql -U postgres example < images
```

### Flask Back-end
``` pip install requirements.txt ```

Set environmental variables:
```
export app_host='localhost'
export db='example'
export db_user='postgres'
export db_host='localhost'
export db_port=5432
```
run: 
```web-app/back_end$ python app.py```

### React Front-end
Install node.js: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm.

Set environmental variables in new file web-app/front_end/.env:
```
REACT_APP_BACK_END_HOST ='localhost'
REACT_APP_BACK_END_PORT = '5000'
REACT_APP_API_KEY = 'API_KEY_from_GOOGLE_STREET_VIEW_API'
```
Get api key from Google Console: https://console.cloud.google.com.

run: 
```web-app/front_end$ npm install```

run: 
```web-app/front_end$ npm start```



# DeepLearning-Playability
