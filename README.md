1. npm install https://github.com/lokhandeomkar/findirestaurant/tarball/master
2. change to /usr/local/lib/node_modules/myapp
3. DEBUG=myapp:* npm start
4. load http://localhost:3000/ in your browser to access the app




# findirestaurant

There are two servers running behind the scene, a Elasticsearch server and a web server. Raw data are cleaned and indexed in Elasticsearch. The framework of web server is Express.js. When the web receives a query, it communicates with Elasticsearch by HTTP POST (request method generally used for uploading files and submitting completed web forms) method. Queries are transferred in the form of Elasticsearch domain-specific language (DSL), while data are transferred in the JSON form. 

The web application also incorporates Google map API for retrieving longitude and latitude ranges given the zip code, and also for displaying the map region covering all the returned restaurants.
