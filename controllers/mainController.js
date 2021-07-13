// Controlador de Index

const path = require('path'); //Modulo nativo que me permite trabajar con rutas

module.exports = {
    main : (req,res) => {
        return res.sendFile(path.join(__dirname,'..','views','home.html'))
    }

}
