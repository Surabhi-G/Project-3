// Setup empty JS object to act as endpoint for all routes
const projectData = [];

// Require Express to run server and routes
const express= require('express');
// Start up an instance of app
const app = express();
const bodyParser= require('body-parser');
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance
const cors=require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));

const port = 8080;
const server= app.listen(port, listening);
// Setup Server
function listening(){
    console.log(`server is up and running on ${port}`);
}
app.get('/all',function(req, res){
    res.send(projectData);
})

app.post('/addData', function (req, res){
    newEntry = {
         date: req.body.date,
         temp: req.body.temp,
         userInput: req.body.userInput
        };
    projectData.unshift(newEntry);    
})