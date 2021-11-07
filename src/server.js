const express = require("express"),
  path = require("path"),
  publicPath = path.join(__dirname, "..", "public"),
  partialsPath = path.join(__dirname, "..", "templates", "partials"),
  viewsPath = path.join(__dirname, "..", "views"),
  app = express(),
  productsRoute = "/products",
  cartsRoute = "/carts",
  contactsRoute = "/contacts",
  hbs = require("hbs"),
  PORT = 8080,
  {
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
//  const name, price;

app.use(express.json());

app.use(express.static(publicPath));

// app.set("view engine", "hbs");
// app.engine("views", () => {}, viewsPath);
// hbs.registerPartials(partialsPath);

// app.get("/livingroom.hbs", (req, res) => {
//   res.render("livingroom.hbs");
// });

app.get(`${productsRoute}/kitchen`, (req, res) => {
  printToWindowByCategory(req, res, "kitchen");
  
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
    contactObj = { name: name };
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
