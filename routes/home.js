const express=require('express')
const router= express.Router();
const cors = require('cors');

router.use(express.static('view'));
router.use(cors());

router.get('/',(req,res)=>{


    res.sendFile('homePage.html', {root: process.cwd()+"/view"});
})

module.exports= router;
