# Blog-Test-App

The Blog application has blog and clientReact directories, PostgreSQL server backup (ServerBlog file) and Database postgres backup (Postgres file).
The server side of the application connects to the localhost PostgreSQL Server, which must be on your device.
To change the database name, username, and password data (to connect to the local database), open .env file in the blog directory.
The server side connects to the PostgreSQL server and creates two tables: post and comment.

HOW TO RUN  

To run the server side:
1. Open the blog directory
2. run command 'npm i'
3. run command 'npm run start:dev'

To run the client side:
1. Open the clientReact directory
2. run command 'npm i'
3. run command 'npm start'

After 'create' 'update' or 'delete' post, reload the page to see the result.
