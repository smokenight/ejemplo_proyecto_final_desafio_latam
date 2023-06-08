const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const { api_secret, api_token_expired_time } = require('./config');
const { getListadoProductos } = require('./modules/controlador_productos');

const app = express();
app.listen(3000, console.log('API Server ON!'));

app.use(cors());
app.use(express.json());

app.get('/productos', async (req, res) => {
	try {
    const { id_categoria, id_marca, num_productos, order_by, type_order, activo } = req.body;
		const listado_productos = await getListadoProductos(id_categoria, id_marca, num_productos, order_by, type_order, activo);
		res.status(200).json(listado_productos);
	} catch (error) {
		res.status(error.code || 500).send(error.message);
	}
});