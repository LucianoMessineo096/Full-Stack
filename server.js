const express= require('express')
const cors= require('cors')
const path = require('path')
const app = express();
const booksRouters=require('./routes/books')
const homeRoutes=require('./routes/home');

app.use(cors());
app.use('/home',homeRoutes);
app.use('/books',booksRouters);
app.use("/controller",express.static("./controller"))

app.listen(3000,()=>{

    //console.log('server on');
})