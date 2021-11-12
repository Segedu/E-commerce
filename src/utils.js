const mongoDB = require("mongodb"),
  MongoClient = mongoDB.MongoClient,
  ObjectId = mongoDB.ObjectId,
  prodColl = "products",
  contColl = "contacts",
  cartColl = "carts",
  url = "mongodb://localhost:27017/",
  dbName = "E-commerce";

let resultArray = [];
let cartArray = [];


function printToWindowByCategory(req, res, category) {
  MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    const currentDB = db.db(dbName);
    currentDB
      .collection(prodColl)
      .find({ category: category })
      .toArray((err, products) => {
        if (err) throw err;
        resultArray = products;
        res.send(resultArray);
      });
  });
}

function getCartById(req, res) {
  MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    const cartId = req.params.id;
    const currentDB = db.db(dbName);
    currentDB
      .collection(cartColl)
      .findOne({ _id: ObjectId(cartId) }, (err, cart) => {
        if (err) throw err;
        cartArray = cart;
        res.send(cart);
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

function insertNewProduct(req, res) {
  MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    const productObj = req.body;
    const currentDB = db.db(dbName);
    currentDB.collection(prodColl).insertOne(productObj, (err, product) => {
      if (err) throw err;
      res.send(product);
    });
  });
}

function insertNewCart(req, res) {
  MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    const cartObj = req.body;
    const currentDB = db.db(dbName);
    currentDB.collection(cartColl).insertOne(cartObj, (err, cart) => {
      if (err) throw err;
      res.send(cart);
    });
  });
}

function insertNewContact(req, res) {
  MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    const contactObj = req.body;
    const currentDB = db.db(dbName);
    currentDB.collection(contColl).insertOne(contactObj, (err, contact) => {
      if (err) throw err;
      res.send(contact);
    });
  });
}

function updateProductById(req, res) {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    const dataToUpdate = req.body;
    const id = req.params.id;
    const currentDB = db.db(dbName);
    currentDB
    .collection(prodColl)
      .findOneAndUpdate(
        { _id: ObjectId(id) },
        { $set: dataToUpdate },
        function (err, resUpdated) {
          if (err) throw err;
          res.send(resUpdated);
          db.close();
        }
        );
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

function addToCart(req, res) {
  MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    const currentDB = db.db(dbName);
    const prodId = req.body._id;
    const idCart = req.params.id;
    currentDB
      .collection(prodColl)
      .findOne({ _id: ObjectId(prodId) }, (err, prod) => {
        if (err) {
          throw err;
        }
        currentDB
        .collection(cartColl)
        .updateOne(
          { _id: ObjectId(idCart) },
            { $push: { products: prod } },
            (err, product) => {
              if (err) throw err;
              res.send(product);
            }
          );
        });
  });
}

function deleteFromCart(req, res) {
  MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    const currentDB = db.db(dbName);
    const productId = req.body._id;
    const theCartId = req.params.id;
    currentDB
    .collection(prodColl)
      .findOne({ _id: ObjectId(productId) }, (err, prod) => {
        if (err) {
          throw err;
        }
        currentDB
        .collection(cartColl)
          .updateOne(
            { _id: ObjectId(theCartId) },
            { $pull: { products: prod } },
            (err, product) => {
              if (err) throw err;
              res.send(product);
            }
            );
      });
    });
  }
  
  module.exports = {
    printToWindowByCategory,
    getAllProducts,
    getAllContacts,
  getCartById,
  insertNewProduct,
  insertNewCart,
  insertNewContact,
  updateProductById,
  deleteProductById,
  addToCart,
  deleteFromCart,
};
