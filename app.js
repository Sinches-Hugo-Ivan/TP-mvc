const express = require('express');
const app = express();
const port= 3030;
const path = require('path');
const { main} = require('./controllers/mainController');

app.use(express.static('public'));

const mainRouter = require('./routes/main');



app.use('/' , mainRouter);


app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'views', 'home.html')))
app.get('/about', (req, res) => res.sendFile(path.join(__dirname, 'views', 'about.html')))

app.listen(port, () => {console.log(`Servidor corriendo en http://localhost:${port}`)})
  