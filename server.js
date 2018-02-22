// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');    // configure app to use bodyParser

var port = process.env.PORT || 4000;        // set our port

//Including all the Controller's We need
var departmentController = require('./app/controllers/departmentController');


// ROUTES FOR OUR API
// =============================================================================


// test route to make sure everything is working (accessed at GET http://localhost:4000/)
app.get('/', function(req, res) {
    res.json({ message: 'Oops! Our API can be accesed on the /api route'});   
});

//Route to our api homepage (accessed at GET http://localhost:4000/api)
app.get('/api', function(req, res) {
    res.json({ message: 'hurray! Welcome to our Api'});   
});

//Route to our department EndPoint (accessed at GET http://localhost:4000/api/v1/departments)
app.get('/api/v1/departments', departmentController.showDepartments);

//Route to our department EndPoint (accessed at POST http://localhost:4000/api/v1/departments)
app.post('/api/v1/departments', departmentController.createDepartment);

//Route to our department EndPoint (accessed at PUT http://localhost:4000/api/v1/departments/:id)
app.put('/api/v1/departments/:id', departmentController.updateDepartment);

//Route to our department EndPoint (accessed at DELETE http://localhost:4000/api/v1/departments/:id)
app.delete('/api/v1/departments/:id', departmentController.deleteDepartment);


    // START THE SERVER
// =============================================================================
var server = app.listen(port, function () {
    console.log('App is listening on port: ' + port)
    });
