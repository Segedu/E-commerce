const express = require("express"),
  path = require("path"),
  publicPath = path.join(__dirname, "..", "public"),
  app = express(),
  productsRoute = "/products",
  cartsRoute = "/carts",
  contactsRoute = "/contacts",
  PORT = 8080,
  {
    // updateMany,
    getAllProducts,
    getAllContacts,
    getCartById,
    insertNewProduct,
    insertNewContact,
    insertNewCart,
    updateCart,
    updateProductById,
    deleteProductById,
    printToWindowByCategory,
  } = require("./functions");

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
  const name = req.body.name,
    productObj = { name: name };
  insertNewProduct(req, res, productObj);
});

app.post(contactsRoute, (req, res) => {
  const name = req.body.name,
    email = req.body.email,
    message = req.body.message,
    contactObj = { name, email, message };
  insertNewContact(req, res, contactObj);
});

app.post(cartsRoute, (req, res) => {
  const name = req.body.name,
    cartObj = { name: name };
  insertNewCart(req, res, cartObj);
});

app.patch(cartsRoute, (req, res) => {
  updateCart(req, res);
});

app.patch(`${productsRoute}/:id`, (req, res) => {
  const id = req.params.id,
    name = req.body.name,
    updateProd = { name: name };
  updateProductById(req, res, id, updateProd);
});

app.delete(`${productsRoute}/:id`, (req, res) => {
  const id = req.params.id;
  deleteProductById(req, res, id);
});

app.listen(PORT, () => {
  console.log(`app is listening on port: ${PORT} http://localhost:8080/`);
});
