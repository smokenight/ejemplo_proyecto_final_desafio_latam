const pool = require('../modules/conexion');

const getListadoProductosBD = async(id_categoria, id_marca, num_productos, order_by = 'id', type_order = 'DESC', activo = 1) => {
  let consulta_listado_productos = 'SELECT * FROM producto AS p';
  if (id_categoria != '') {
    consulta_listado_productos += ' INNER JOIN producto_categoria_producto AS pc ON (p.id = pc.id_producto)';
  }
  if (id_marca != '') {
    consulta_listado_productos += ' INNER JOIN producto_marca_producto AS pm ON (p.id = pm.id_producto)';
  }

  consulta_listado_productos += ' WHERE 1=1';

  if (id_categoria != '') {
    consulta_listado_productos += ' AND pc.id_categoria = ' + id_categoria;
  }
  if (id_marca != '') {
    consulta_listado_productos += ' AND pm.id_marca = ' + id_marca;
  }

  consulta_listado_productos += ' AND p.activo = ' + activo;

  consulta_listado_productos += ' ORDER BY ' + order_by + ' ' + type_order;

  if (num_productos != '') {
    consulta_listado_productos += ' LIMIT ' + num_productos;
  }

  const { rows } = await pool.query(consulta_listado_productos);
  return rows; 
}

module.exports = { getListadoProductosBD };