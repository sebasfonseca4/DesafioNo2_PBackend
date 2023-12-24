const ProductManager = require('./ProductManager');

const productManager = new ProductManager('./productos.json');

// ejemplo de como se puede usar el programa o script
(async () => {
  // agregar un producto
  const newProduct = await productManager.addProduct({
    title: 'Producto 1',
    description: 'Descripción del producto 1',
    price: 29.99,
    thumbnail: 'ruta/imagen/producto1.jpg',
    code: 'P001',
    stock: 10,
  });
  console.log('Producto agregado:', newProduct);

  // obtener todos los productos
  const allProducts = await productManager.getProducts();
  console.log('Productos:', allProducts);

  // obtener un producto por ID
  const productById = await productManager.getProductById(1);
  console.log('Producto por ID:', productById);

  // actualizar un producto
  const updatedProduct = await productManager.updateProduct(1, { price: 39.99, stock: 15 });
  console.log('Producto actualizado:', updatedProduct);

  // eliminar un producto
  const deletedProduct = await productManager.deleteProduct(1);
  console.log('Producto eliminado:', deletedProduct);
})();
