# Steps as of 11/1

1. Read about MVC (model view controller) setup and think about creating classes to separate out things. Think about creating a function that represents a query. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

2. Complete remaining tasks from weekend 

# Steps for 10/28 weekend 

1. Make update form for updating student 
-- Render a student detail page 
-- Render form with student's details added 
-- Handle submission of update data and do an update 

2. Add teacher's name to classroom 
-- Go back and rewatch ajax chapter
-- The challenge is to use promises or two promises with async await 

3. Persist whether student is highlighted or not 
-- Write the js to handle the click 
-- Write the endpoint to update it 



# Steps Remaining 10/25/2022

## 1. Figure out how to connect Express.js to database 
- This is basically done. Proof that it is "working" can currently been seen by visiting 
https://peaceful-reaches-86693.herokuapp.com/classroom/1

## 2. Look at some examples of other Express Heroku Postgres projects to see how they set it up
- This is my favorite example so far, and it helped me work through #1 : https://www.taniarascia.com/node-express-postgresql-heroku/

## 3. Write create tables and populate tables scripts 
This has all been added in the `shine.sql` file 

## 4. Figure out how to get a classroom's worth of students
Added all the routing logic to `server.js` for now. 

## 5. Make a form to create a new student 
  As a user, 
  On this heroku app, 
  I can click "add a student"
  And on the following page, 
  I can enter a student's first name, last name, birth date 
  And I can fill out the form and submit 
  And I can see that I submitted the student successfully (or unsuccessfully) 
  And I can get back to the classroom to see all my students 

1. Created a form at `/student/new`. 
2. Currently wiring it up to post to the db. 
3. Then will add a link to go to the form. 
4. Then will add query to populate classrooms in the classroom dropdown. 
5. Then will add validation logic so you can't post the same student twice. 
6. Then will style the form. 

## 6. Remove / Update students 


## 7. Write some JS to reload the page frequently to get the current state of students 



Routes needed: 
|Method     |URLs                     |Actions                                                        |Status |
|:---       |:---                     |:---                                                           |:---   |
|GET        |api/v1/classroom/new     |get a web form to create a new classroom                       |       |
|POST       |api/v1/classroom/new     |create a new classroom and show its details with no students   |       |
|GET        |api/v1/classroom/:id     |get a single classroom and all students                        |       |
|PUT        |api/v1/classroom/:id     |update details of a single classroom                           |       |
|DELETE     |api/v1/classroom/:id     |remove a classroom and its dependencies                        |       |
|GET        |api/v1/student/new       |get a web form to create a new student                         |       |
|POST       |api/v1/student/new       |create a new student and redirect to show their details        |       |
|GET        |api/v1/student/:id       |get a single student and their details                         |       |
|PUT        |api/v1/student/:id       |update details of a single student                             |       |
|DELETE     |api/v1/student/:id       |remove a student and their dependencies                        |       |


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
