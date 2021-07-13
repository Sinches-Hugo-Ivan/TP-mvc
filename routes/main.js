const express = require('express');  // Requiere express
const router = express.Router();  // Requiere router

const{ main } = require ('../controllers/mainController')

router.get('/',main);


module.exports = router;   // exporto