const express = require('express');
const path = require('path');

// Create our Express app
const app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// Base middlewares
app.use('/', express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

//Variables
const listaDeProductos = [
    {
        id: 1,
        nombre: "Remera Tulum",
        precio: 690,
        color: "Rosa",
        imagen: "./img/productos/remera1.jpg",
        boton: "Ver producto",
    },
    {
        id: 2,
        nombre: "Jean Blue Denim",
        precio: 1890,
        color: "Azul",
        imagen: "./img/productos/jean2.jpg",
        boton: "Ver producto",
    },
    {
        id: 3,
        nombre: "Deportivo Cargo",
        precio: 1290,
        color: "Gris",
        imagen: "./img/productos/deportivo3.jpg",
        boton: "Ver producto",
    },
    {
        id: 4,
        nombre: "Deportivo Zenith",
        precio: 1290,
        color: "Salmon",
        imagen: "./img/productos/deportivo2.jpg",
        boton: "Ver producto",
    },
    {
        id: 5,
        nombre: "Jean Black Denim",
        precio: 1890,
        color: "Negro",
        imagen: "./img/productos/jean3.jpg",
        boton: "Ver producto",
    },
    {
        id: 6,
        nombre: "Remera Tulum",
        precio: 690,
        color: "Celeste",
        imagen: "./img/productos/remera2.jpg",
        boton: "Ver producto",
    },
    {
        id: 7,
        nombre: "Jean Venice",
        precio: 1890,
        color: "Gris",
        imagen: "./img/productos/jean1.jpg",
        boton: "Ver producto",
    },
    {
        id: 8,
        nombre: "Remera Tulum",
        precio: 690,
        color: "Blanco",
        imagen: "./img/productos/remera3.jpg",
        boton: "Ver producto",
    },
    {
        id: 9,
        nombre: "Deportivo Malto",
        precio: 1290,
        color: "Negro",
        imagen: "./img/productos/deportivo1.jpg",
        boton: "Ver producto",
    },
];

const emails = [];

//Definir ruta /emails GET
app.get('/emails', function(req, res) {
    res.send(emails);
});

//Definir ruta /newslatter POST
app.post('/newslatter', function(req, res) {
    const id = emails.length + 1;
    const name = req.body.name;
    const newEmail = {
        "id": id,
        "name": name
    };

    //Validamos que el nombre no esté vacío
    if(newEmail.name){
        emails.push(newEmail);
        res.redirect('/')
    }
});

// Define routes
app.get('/', function(req, res){
    //Render using EJS
    res.render('inicio', {
    });
});
app.get('/catalogo', function(req, res){
    //Render using EJS
    res.render('catalogo', {
        productos: listaDeProductos,
    });
});

// Start server
const port = 4000;
const server = app.listen(port, () => {
  console.log(`Express running → PORT ${server.address().port}`);
});