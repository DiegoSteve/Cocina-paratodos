const express = require('express');
const app = express();
const puerto = 80;
const UsuariosController = require('./controllers/UsuariosController'); // Cambiado a UsuariosController
const ProductosController = require('./controllers/ProductosController'); // Nuevo controlador
const ComprasController = require('./controllers/ComprasController'); // Nuevo controlador

app.use(express.json());

app.get('/', function (req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.send('¡Prueba 123456789012!');
});

// Rutas para Usuarios
app.get('/usuarios', UsuariosController.indexGet);
app.get('/usuarios/:id([0-9]+)', UsuariosController.itemGet);
app.post('/usuarios', UsuariosController.indexPost);
app.put('/usuarios/:id([0-9]+)', UsuariosController.itemPut);
app.patch('/usuarios/:id([0-9]+)', UsuariosController.itemPatch);

// Rutas para Productos
app.get('/productos', ProductosController.indexGet);
app.get('/productos/:id([0-9]+)', ProductosController.itemGet);
app.post('/productos', ProductosController.indexPost);
app.put('/productos/:id([0-9]+)', ProductosController.itemPut);
app.patch('/productos/:id([0-9]+)', ProductosController.itemPatch);

// Rutas para Compras
app.get('/compras', ComprasController.indexGet);
app.get('/compras/:id([0-9]+)', ComprasController.itemGet);
app.post('/compras', ComprasController.indexPost);
app.put('/compras/:id([0-9]+)', ComprasController.itemPut);
app.patch('/compras/:id([0-9]+)', ComprasController.itemPatch);

app.listen(puerto, function() {
    console.log("Servidor en espera http://localhost");
});
