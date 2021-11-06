const mongoDB = require("mongodb"),
  MongoClient = mongoDB.MongoClient,
  ObjectId = mongoDB.ObjectId,
  prodColl = "products",
  contColl = "contacts",
  cartColl = "carts",
  url = "mongodb://localhost:27017/",
  dbName = "E-commerce";

let resultArray = [];
function printToWindowByCategory(req, res, category) {
  MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    const currentDB = db.db(dbName);
    currentDB
      .collection(prodColl)
      .find({ category: category })
      .toArray((err, products) => {
        if (err) throw err;
        resultArray.push(products);
        res.send(resultArray);
        console.log(resultArray);
      });
  });
}

function getAllProducts(req, res) {
  MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    const currentDB = db.db(dbName);
    currentDB
      .collection(prodColl)
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
      .collection(contColl)
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
      .collection(cartColl)
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

function insertNewProduct(req, res, productObj) {
  MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    const currentDB = db.db(dbName);
    currentDB.collection(prodColl).insertOne(productObj, (err, product) => {
      if (err) throw err;
      res.send(product);
    });
  });
}

function insertNewCart(req, res, cartObj) {
  MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    const currentDB = db.db(dbName);
    currentDB.collection(cartColl).insertOne(cartObj, (err, cart) => {
      if (err) throw err;
      res.send(cart);
    });
  });
}
function insertNewContact(req, res, contactObj) {
  MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    const currentDB = db.db(dbName);
    currentDB.collection(contColl).insertOne(contactObj, (err, contact) => {
      if (err) throw err;
      res.send(contact);
    });
  });
}

function deleteProductById(req, res, id) {
  MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    const currentDB = db.db(dbName);
    currentDB
      .collection(prodColl)
      .findOneAndDelete({ _id: ObjectId(id) }, (err, product) => {
        if (err) throw err;
        res.send(product);
      });
  });
}

function updateProductById(req, res, id, updateProd) {
  MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    const currentDB = db.db(dbName);
    currentDB
      .collection(prodColl)
      .findOneAndUpdate(
        { _id: ObjectId(id) },
        { $set: updateProd },
        (err, product) => {
          if (err) throw err;
          res.send(product);
        }
      );
  });
}

function updateCart() {}

module.exports = {
  getAllProducts,
  getAllContacts,
  getCartById,
  insertNewProduct,
  insertNewCart,
  insertNewContact,
  updateProductById,
  updateCart,
  deleteProductById,
  printToWindowByCategory,
};
