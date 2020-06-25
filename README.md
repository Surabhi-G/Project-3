# Weather-Journal App Project

## Overview
This project creates an asynchronous web app that uses Web API and user data to dynamically update the UI. 

Building
---------------------------------------------------
To get the project up and running I followed these steps:

Setting up project environment, making sure I have Node and packages installed, and included in my server.js file.

Added POST and GET routes to ensure correct retrieval of data from the server.

Acquired API credentials from OpenWeatherMap website.

Created async functions to fetch weather data and store it on my local server.

Set up a function that updated UI dynamically.

Instructions
----------------------------------------------------
clone this repo

navigate to local repo directory within your CLI

run npm install express body-parser cors node-fetch to install dependencies

add your personal OpenWeatherMap API key to api-creds.json_template. Rename this file removing the _template suffix

to start the server run node ./server.js

navigate to http://127.0.0.1:8080 in your favourite web-browser
