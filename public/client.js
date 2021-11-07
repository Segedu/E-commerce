let lRoomProducts;
const productsRoute = "/products",
  url = `http://localhost:8080${productsRoute}`;
axios
  .get(`${productsRoute}/kitchen`)
  .then(function (response) {
    if (response.status == 200) {
      lRoomProducts = response.data;
      let kitchCont = document.getElementById("kitchCont");
      printToWindowByCategory(kitchCont, lRoomProducts);
    }
  })
  .catch(function (error) {
    console.log("you are in getting products catch");
  });

function printToWindowByCategory(divElement, resultArray) {
  for (let i = 0; i < resultArray.length; i++) {
    // if (resultArray[i].category === category && divElement !== null) {
    divElement.innerHTML += `<section>
      <img src="${resultArray[i].images[0]}"/>
      <article>
      <p>${resultArray[i].name}</p>
      <p>${resultArray[i].description}</p>
      <h1>${resultArray[i].price + " ₪"}</h1>
      <button onclick="addToCart(${resultArray[i].id})" id="addBtn">
      add to cart</button>
      <button onclick="addTolikedItems(${
        resultArray[i].id
      })" id="likeBtn"><img src="https://img.icons8.com/ios-glyphs/30/000000/like--v1.png"/></button>
      </article>
      </section>`;
  }
}
// }

// printToWindowByCategory(bedRCont, "bedroom");
// printToWindowByCategory(livingCont, "living room");
// printToWindowByCategory(kitchenCont, "kitchen");
// printToWindowByCategory(bathCont, "bath");

function addToCart(id) {
  for (let i = 0; i < products.length; i++) {
    if (id === products[i].id) {
      itemsArray.push(products[i]);
      itemCounter.innerHTML = `<p id="counter">${itemsArray.length}</p>`;
    }
  }
}

function addTolikedItems(id) {
  for (let i = 0; i < products.length; i++) {
    if (id === products[i].id) {
      likedItemsArray.push(products[i]);
      likeCounter.innerHTML = `<p id="saveItem">${likedItemsArray.length}</p>`;
    }
  }
}

function showMobileNav() {
  var navLinks = document.getElementById("navLinks");
  if (navLinks.className === "navBarCont") {
    navLinks.className += " responsive";
  } else {
    navLinks.className = "navBarCont";
  }
}

// document.getElementById("submit").addEventListener("click", insertNewContact);

// const mongoDB = require("mongodb"),
//   MongoClient = mongoDB.MongoClient,
//   contColl = "contacts",
//   url = "mongodb://localhost:27017/",
//   dbName = "E-commerce";

// function insertNewContact(e) {
//   e.preventDefault();
//   MongoClient.connect(url, (err, db) => {
//     if (err) throw err;
//     const name = req.body.name,
//       email = req.body.email,
//       message = req.body.message,
//       contactObj = { name, email, message };
//     const currentDB = db.db(dbName);
//     currentDB.collection(contColl).insertOne(contactObj, (err, contact) => {
//       if (err) throw err;
//       res.send(contact);
//     });
//   });
// }
