const mongoDB = require("mongodb"),
  MongoClient = mongoDB.MongoClient,
  ObjectId = mongoDB.ObjectId,
  productsCollec = "products",
  contactsCollec = "contacts",
  cartsCollec = "carts",
  url = "mongodb://localhost:27017/",
  dbName = "E-commerce";

function getAllProducts(req, res) {
  MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    const currentDB = db.db(dbName);
    currentDB
      .collection(productsCollec)
      .find({})
      .toArray((err, products) => {
        if (err) {
          console.log("error at getting all products");
          throw err;
        }
        res.send(products);
        db.close();
      });
  });
}

function getAllContacts(req, res) {
  MongoClient.connect(url, (err, db) => {
    if (err) {
      throw err;
    }
    const currentDB = db.db(dbName);
    currentDB
      .collection(contactsCollec)
      .find({})
      .toArray((err, contacts) => {
        if (err) {
          console.log("error at getting all contacts");
          throw err;
        }
        res.send(contacts);
        db.close();
      });
  });
}

function getCartById(req, res) {
  MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    const currentDB = db.db(dbName);
    const id = req.params.id;
    currentDB
      .collection(cartsCollec)
      .findOne({ _id: ObjectId(id) }, (err, cart) => {
        if (err) {
          console.log("error at getting this cart");
          throw err;
        }
        res.send(cart);
        db.close();
      });
  });
}
module.exports = { getAllProducts, getAllContacts, getCartById };
