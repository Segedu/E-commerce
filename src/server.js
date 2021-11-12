const express = require("express"),
  path = require("path"),
  publicPath = path.join(__dirname, "..", "public"),
  app = express(),
  productsRoute = "/products",
  cartsRoute = "/carts",
  contactsRoute = "/contacts",
  PORT = 8080,
  {
    printToWindowByCategory,
    getAllProducts,
    getAllContacts,
    getCartById,
    insertNewProduct,
    insertNewContact,
    insertNewCart,
    addToCart,
    deleteFromCart,
    updateProductById,
    deleteProductById,
  } = require("./utils");

app.use(express.json());

app.use(express.static(publicPath));

app.get(`${productsRoute}/kitchen`, (req, res) => {
  printToWindowByCategory(req, res, "kitchen");
});

app.get(`${productsRoute}/bedroom`, (req, res) => {
  printToWindowByCategory(req, res, "bedroom");
});

app.get(`${productsRoute}/bath`, (req, res) => {
  printToWindowByCategory(req, res, "bath");
});

app.get(`${productsRoute}/livingRoom`, (req, res) => {
  printToWindowByCategory(req, res, "livingRoom");
});

app.get(productsRoute, (req, res) => {
  getAllProducts(req, res);
});

app.get(contactsRoute, (req, res) => {
  getAllContacts(req, res);
});

app.get(`${cartsRoute}/:id`, (req, res) => {
  getCartById(req, res);
});

app.post(productsRoute, (req, res) => {
  insertNewProduct(req, res);
});

app.post(contactsRoute, (req, res) => {
  insertNewContact(req, res);
});

app.post(cartsRoute, (req, res) => {
  insertNewCart(req, res);
});

app.patch(`${cartsRoute}/add/:id`, (req, res) => {
  addToCart(req, res);
});

app.patch(`${cartsRoute}/delete/:id`, (req, res) => {
  deleteFromCart(req, res);
});

app.patch(`${productsRoute}/:id`, (req, res) => {
  updateProductById(req, res);
});

app.delete(`${productsRoute}/:id`, (req, res) => {
  const id = req.params.id;
  deleteProductById(req, res, id);
});

app.listen(PORT, () => {
  console.log(`app is listening on port: ${PORT} http://localhost:8080/`);
});
