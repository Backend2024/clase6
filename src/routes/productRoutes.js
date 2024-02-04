const express = require('express');
const router = express.Router();
const ProductManager = require('../ProductManager');
const productManager = new ProductManager('../data/products.json');

router.get('/', async (req, res) => {
    try {
        let products = await productManager.getProducts();
        res.render('home', { products }); // Utiliza la vista 'home' para mostrar los productos
    } catch (err) {
        res.status(500).send(err.message);
    }
});

router.get('/:pid', async (req, res) => {
    try {
        const product = await productManager.getProductById(parseInt(req.params.pid));
        if (product) {
            res.render('productDetail', { product }); // Suponiendo que tienes una vista 'productDetail'
        } else {
            res.status(404).send('Producto no encontrado');
        }
    } catch (err) {
        res.status(500).send(err.message);
    }
});

router.post('/', async (req, res) => {
    try {
        const { title, description, price, thumbnail, code, stock } = req.body;
        await productManager.addProduct(title, description, price, thumbnail, code, stock);
        res.redirect('/'); // Redirige a la página principal para ver la lista de productos actualizada
    } catch (err) {
        res.status(500).send(err.message);
    }
});

router.put('/:pid', async (req, res) => {
    try {
        await productManager.updateProduct(parseInt(req.params.pid), req.body);
        res.send('Producto actualizado con éxito');
    } catch (err) {
        res.status(500).send(err.message);
    }
});

router.delete('/:pid', async (req, res) => {
    try {
        await productManager.deleteProduct(parseInt(req.params.pid));
        res.send('Producto eliminado con éxito');
    } catch (err) {
        res.status(500).send(err.message);
    }
});

module.exports = router;