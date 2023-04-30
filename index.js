const express = require('express');
const app = express();
const port = 5500;

const config = require('../conntecion-to-pgAdmin/src/config/config');

app.listen(port,(err)=>{
    if(!err) console.log('Server created Sucessfully');
})