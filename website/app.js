/* Global Variables */

const baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = 'f93508f5516670154f8d3574002efac4';

// Create a new date instance dynamically with JS

let d = new Date();
let newDate = (d.getMonth()+1)+' . '+ d.getDate()+' . '+ d.getFullYear();

document.getElementById('generate').addEventListener('click', performAction);

function performAction(event){
    let zip = document.getElementById('zip').value;
    let userInput = document.getElementById('feelings').value;

    if(isNaN(parseFloat(zip))){
        alert("Please enter zip");
    }
    else{
        getData(baseURL, zip, apiKey)
        .then(function(weatherData){
            console.log(weatherData);
            const temperature = weatherData.main.temp;
            postData('/addData', 
                {date: newDate, 
                temp: temperature, 
                userInput: userInput});       
            updateUI('/all');
        }) 
    }   
};

const getData= async(baseURL, zip, apiKey)=>{
    const res = await fetch(`${baseURL + zip}&APPID=${apiKey}`)
    
    try {
    const weatherData = await res.json();
    return weatherData;
    }  
    catch(error) {
    console.log("error", error);
    }   
};

const postData = async(url = '', data = {})=>{
    const res= await fetch(url,{
        method: 'POST',
        credentials: 'same-origin',
        headers:{
            'content-type':'application/json',
        },
        body: JSON.stringify(data),
    });
    try{
        const newData= await res.json();
        console.log(newData)
        return newData;
    }
    catch(error){
        console.log("error",error);
    }
};

const updateUI = async (url='') => {
    const req = await fetch(url);
    try{
      const allData = await req.json();
      console.log(allData);
      document.getElementById('date').innerHTML = 'Today is : '+ allData[0].date;
      document.getElementById('temp').innerHTML = 'Current temparature is : '+ allData[0].temp;
      document.getElementById('content').innerHTML = 'I am feeling : ' + allData[0].userInput;
    }
    catch(error){
      console.log("error", error);
    }
};

