# Steps Remaining 10/25/2022

## 1. Figure out how to connect Express.js to that database 

## 2. Look at some examples of other Express Heroku Postgres projects to see how they set stuff up

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
