const express = require('express');
const app = express();

const path = require('path');
const PORT = 8085;

const fs = require('fs');

// MainPage
const templateFile = "src/template/";
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, templateFile + "main.html"));
});


//CSS Files
const styleFile = "src/styles/";
app.get('/css', (req,res) =>{
    res.sendFile(path.join(__dirname, styleFile +'main.css'))
});
app.get('/css/menu', (req,res) => {
    res.sendFile(path.join(__dirname, styleFile +'menu-burger.css'))
})

// JS Files
const scriptFile = "src/script/";
app.get('/script', (req,res) =>{
    res.sendFile(path.join(__dirname, scriptFile + 'main.js'))
});


//Json
app.get("/infos", (req,res) => {
    res.sendFile(path.join(__dirname, "src/data/carinfo.json"))
});

//Images
const imgPath = "src/data/images/";
app.get("/img/:model", (req, res) => {
    const model = req.params.model;
    res.sendFile(path.join(__dirname, imgPath+`${model}.jpeg`));
})
app.get("/vector/:model", (req,res) =>{
    const model = req.params.model;
    res.sendFile(path.join(__dirname, imgPath+`${model}.png`))
})

// Listening
app.listen(PORT, function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", PORT);
});