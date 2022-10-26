# Steps Remaining 10/25/2022

## 1. Figure out how to connect Express.js to database 

## 2. Look at some examples of other Express Heroku Postgres projects to see how they set it up

## 3. Write create tables and populate tables scripts 

## 4. Figure out how to get a classroom's worth of students

## 5. Make a form to create a new student 
  As a user, 
  On this heroku app, 
  I can click "add a student"
  And on the following page, 
  I can enter a student's first name, last name, birth date 
  And I can fill out the form and submit 
  And I can see that I submitted the student successfully (or unsuccessfully) 
  And I can get back to the classroom to see all my students 
  
## 6. Remove / Update students 

## 7. Write some JS to reload the page frequently to get the current state of students 


Routes needed: 
|Method     |URLs                     |Actions                                                        |
|:---       |:---                     |:---                                                           |
|GET        |api/v1/classroom/new     |get a route to create a new classroom                          |
|POST       |api/v1/classroom/new     |create a new classroom and show its details with no students   |
|GET        |api/v1/classroom/:id     |get a single classroom and all students                        |
|PUT        |api/v1/classroom/:id     |update details of a single classroom                           |
|DELETE     |api/v1/classroom/:id     |remove a classroom and its dependencies                        |
|GET        |api/v1/student/new       |get a route to create a new student                            |
|POST       |api/v1/student/new       |create a new student and redirect to show their details        |
|GET        |api/v1/student/:id       |get a single student and their details                         |
|PUT        |api/v1/student/:id       |update details of a single student                             |
|DELETE     |api/v1/student/:id       |remove a student and their dependencies                        |


-----------

## node-js-getting-started

A barebones Node.js app using [Express 4](http://expressjs.com/).

This application supports the [Getting Started on Heroku with Node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs) article - check it out.

### Running Locally

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku CLI](https://cli.heroku.com/) installed.

```sh
$ git clone https://github.com/heroku/node-js-getting-started.git # or clone your own fork
$ cd node-js-getting-started
$ npm install
$ npm start
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

### Deploying to Heroku

```
$ heroku create
$ git push heroku main
$ heroku open
```
or

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

### Documentation

For more information about using Node.js on Heroku, see these Dev Center articles:

- [Getting Started on Heroku with Node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- [Node.js on Heroku](https://devcenter.heroku.com/categories/nodejs)
- [Best Practices for Node.js Development](https://devcenter.heroku.com/articles/node-best-practices)
- [Using WebSockets on Heroku with Node.js](https://devcenter.heroku.com/articles/node-websockets)
