const express = require("express"),
  path = require("path"),
  publicPath = path.join(__dirname, "..", "public"),
  app = express(),
  productsRoute = "/products",
  cartsRoute = "/carts",
  contactsRoute = "/contacts",
  PORT = 8080,
  {
    getAllProducts,
    getAllContacts,
    getCartById,
    insertNewProduct,
    insertNewCart,
    insertNewContact,
    deleteProductById,
  } = require("./functions");

app.use(express.json());

app.use(express.static(publicPath));

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
    contactObj = { name: name };
  insertNewContact(req, res, contactObj);
});

app.post(cartsRoute, (req, res) => {
  const name = req.body.name,
    cartObj = { name: name };
  insertNewCart(req, res, cartObj);
});

app.delete(`${productsRoute}/:id`, (req, res) => {
  const id = req.params.id;
  deleteProductById(req, res, id);
});

app.listen(PORT, () => {
  console.log(`app is listening on port: ${PORT} http://localhost:8080/`);
});
