const express = require('express');
const cors = require('cors')
const personeRoutes = require('./routes/persona')
const homeRoutes = require('./routes/home')

const app=express();
app.use(cors())
app.use(express.json())
app.use('/persone',personeRoutes);
app.use('/home',homeRoutes)

app.listen(3000,()=>{

    //console.log('server express attivo')
})