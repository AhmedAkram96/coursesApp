# coursesApp

## Manual Run

- prerequisite actions

1. open terminal, and make sure you have postgres db downloaded on your machine
2. RUN `psql postgres` to open a postgres shell as a root user.
3. Inside, RUN `CREATE DATABASE babbel;` to create database.
4. RUN `CREATE USER babbeluser;` to create a user.
5. RUN `grant all privileges on database babbel to babbeluser;` to grant all permissions to the user.


- Inside the app directory

1. create `.env` file similar to `env.example` file and fill it with privately given values.
2. In a terminal, RUN `npm install`
3. RUN `npm start`
4. Finally, use the documentation here to work with the app.
