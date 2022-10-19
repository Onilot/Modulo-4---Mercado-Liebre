const express = require('express');
const app = express();
const path = require('path');
const publicFolderPath = path.resolve('public');
app.use(express.static(publicFolderPath));
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Servidor funcionando en puerto http://localhost:3000/')
});
app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/views/home.html')
});
app.get('/registro', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/register.html'))
})
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/login.html'))
})
app.get('/offers', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/offers.html'))
})
