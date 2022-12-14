# coursesApp

## Docker-compose:

Easy way to run th project using docker-compose

- Inside the app directory
  1. create `.env` file similar to `env.example` file and fill it with privately given values.
  2. RUN `docker-compose up`
  3. The app now is running on port `3000`, use the documentation below to work with the app.

  
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
  4. The app now is running on port `3000`, use the documentation below to work with the app.


## Documentation

Please find documentation published [here](https://documenter.getpostman.com/view/8759901/2s8YmHxjqH)
## Notes and Assumptions:

1. I assumed no need for image deployment in a remote storage and use local storage for saving profile pictures instead.
2. Creating a user is a separate endpoint from uploading the profile picture, initially user p.p. takes a default value of simple image on create.
3. JWT is used for authentication. Token should be added to headers of all requests except for Signup and login.
4. No lesson can be created with a language that doesn't exist in db.
5. If a language is assigned to a lesson, and the language got deleted the lesson will be deleted as well.
6. Active lesson and all lessons inside the courses's lessons list should exist in lessons table.
7. If a lesson is deleted, it gets deleted from all courses lessons lists it exists in as well as updating the active lesson to be null.
8. If a user is deleted, all created courses created by that user is deleted.
9. Courses gets created initially with name and owner fields only, and takes other values related to lessons in the update function.
