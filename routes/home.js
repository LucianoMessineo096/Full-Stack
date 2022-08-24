const express = require('express');
const router = express.Router();

app.get("/",(req,res)=>{

    res.json('ciao')
})

module.exports = router
