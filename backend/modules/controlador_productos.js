const { getListadoProductosBD } = require('./consultas_productos');

const getListadoProductos = async (id_categoria, id_marca, num_productos, order_by, type_order, activo) => {
  try {
    const listado_productos = await getListadoProductosBD(id_categoria, id_marca, num_productos, order_by, type_order, activo);
    return listado_productos;
  } catch (error) {
    console.log(error);
    return false;
  }
};

module.exports = { getListadoProductos };