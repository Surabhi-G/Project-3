/* Global Variables */
let baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';
let apiKey = 'f93508f5516670154f8d3574002efac4';

// Create a new date instance dynamically with JS

let d = new Date();
let newDate = (d.getMonth()+1)+'.'+ d.getDate()+'.'+ d.getFullYear();

document.getElementById('generate').addEventListener('click', performAction);

function performAction(event){
    let zip = document.getElementById('zip').value;
    let userInput = document.getElementById('feelings').value;

    getData(baseURL, zip, apiKey)

    .then(function(data){
        console.log(data);
        postData('/addData', 
                {date: JSON.stringify(newDate), 
                temp: JSON.stringify(data), 
                content: JSON.stringify(userInput)} );
        updateUI('/all')
    }) 
};

const getData= async(baseURL, zip, apiKey)=>{
    const res = await fetch(`${baseURL + zip}&APPID=${apiKey}`)
    
    try {
    const data = await res.json();
    return JSON.stringify(data);
    }  
    catch(error) {
    console.log("error", error);
    }

   
};

const postData = async(url = '', data = {})=>{
    const response= await fetch(url,{
        method: 'POST',
        credentials: 'same-origin',
        header:{
            'content-type':'application/json',
        },
        body : JSON.stringify(data),
    });
    try{
        const newData= await response.json();
        return newData;
    }catch(error){
        console.log("error",error);
    }
};
const updateUI = async (url='') => {
    const request = await fetch(url);
    try{
      const allData= await request.json();
      document.getElementById('date').innerHTML = newDate;
      document.getElementById('temp').innerHTML = allData[0].temp;
      document.getElementById('content').innerHTML = allData[0].userInput;
  
    }catch(error){
      console.log("error", error);
    }
};

