const libri= require('../models/libri')
const autori = require('../models/autori');
const magazzino = require('../models/magazzino');

const express= require('express')
const cors = require('cors')
const router= express.Router();

router.use(express.static('../controller'));
router.use(cors())

router.get('/',(req,res)=>{

    res.status(200).json(libri);
})

router.get('/:isbn',(req,res)=>{

    const isbn=req.params.isbn;

    libri.forEach((libro)=>{

        if(libro.isbn==isbn){

            res.status(200).json(libro);
        }
    })



})

router.get('/:country/stat',(req,res)=>{

    const nazione = req.params.country;
    var count=0;

    autori.forEach(autore=>{

        if(autore.nazionalità==nazione){

            const idAutore= autore.id;

            libri.forEach(libro=>{

                if(libro.idAutore==idAutore){

                    count++;
                }

            })

        }

    })

    res.status(200).json(count);


})

router.get('/:isbn/authors',(req,res)=>{

    const isbn = req.params.isbn;

    libri.forEach(libro=>{

        if(libro.isbn==isbn){

            const idAutore=libro.idAutore;

            autori.forEach(autore=>{


                if(autore.id==idAutore){

                    res.status(200).json(autore);
                }
            })
        }
    })


})

router.get('/:isbn/warehouse',(req,res)=>{



})

/* POST */

router.post('/',(req,res)=>{


})

router.post('/:isbn/warehouse',(req,res)=>{


})

/*PUT*/

router.put('/:isbn',(req,res)=>{


})

router.put('/:isbn/warehouse',(req,res)=>{


})

/*DELETE*/

router.delete('/:isbn',(req,res)=>{



})

router.delete('/:isbn/warehouse',(req,res)=>{



})


module.exports = router