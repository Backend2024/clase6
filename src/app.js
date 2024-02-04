const express = require('express');
const { Server: HttpServer } = require('http');
const { Server: IOServer } = require('socket.io');
const exphbs = require('express-handlebars');

const app = express();
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);

const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');

// Configuración de Handlebars
app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Middleware
app.use(express.json());
app.use(express.static('public'));

// Rutas
app.use('/api/products', productRoutes);
app.use('/api/carts', cartRoutes);

// Websockets
io.on('connection', (socket) => {
    console.log('Un cliente se ha conectado');

    socket.on('newProduct', async (productData) => {
        // Asumiendo una función para agregar producto y notificar a todos los clientes
        await addProduct(productData); // Implementa la lógica para agregar el producto
        io.emit('productListUpdated');
    });

    socket.on('deleteProduct', async (productId) => {
        // Asumiendo una función para eliminar producto y notificar a todos los clientes
        await deleteProduct(productId); // Implementa la lógica para eliminar el producto
        io.emit('productListUpdated');
    });
});

// Iniciar servidor
httpServer.listen(8080, () => {
    console.log("Servidor escuchando en el puerto 8080");
});