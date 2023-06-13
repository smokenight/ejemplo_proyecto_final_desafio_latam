const pool = require('../modules/conexion');

const getListadoProductosBD = async(id_categoria, id_subcategoria, id_marca, num_productos, order_by = 'id', type_order = 'DESC', activo = 1) => {
  let consulta_listado_productos = 'SELECT * FROM producto AS p';
  if (id_categoria != '') {
    consulta_listado_productos += ' INNER JOIN producto_subcategoria_producto AS psc ON (p.id = psc.id_producto)';
    consulta_listado_productos += ' INNER JOIN subcategoria_producto AS sc ON (sc.id = psc.id_subcategoria)';
  } else if (id_subcategoria != '') {
    consulta_listado_productos += ' INNER JOIN producto_subcategoria_producto AS psc ON (p.id = psc.id_producto)';
  }
  if (id_marca != '') {
    consulta_listado_productos += ' INNER JOIN producto_marca_producto AS pm ON (p.id = pm.id_producto)';
  }

  consulta_listado_productos += ' WHERE 1=1';

  if (id_categoria != '') {
    consulta_listado_productos += ' AND sc.id_categoria = ' + id_categoria;
  } else if (id_subcategoria != '') {
    consulta_listado_productos += ' AND psc.id_subcategoria = ' + id_subcategoria;
  }
  if (id_marca != '') {
    consulta_listado_productos += ' AND pm.id_marca = ' + id_marca;
  }

  consulta_listado_productos += ' AND p.activo = ' + activo;

  consulta_listado_productos += ' ORDER BY p.' + order_by + ' ' + type_order;

  if (num_productos != '') {
    consulta_listado_productos += ' LIMIT ' + num_productos;
  }
  console.log(consulta_listado_productos);
  const { rows } = await pool.query(consulta_listado_productos);
  return rows; 
}

module.exports = { getListadoProductosBD };