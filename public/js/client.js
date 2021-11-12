function axiosByCategory(route) {
  const divName = `${route}Cont`,
    productsRoute = "/products";
  axios
    .get(`${productsRoute}/${route}`)
    .then(function (response) {
      if (response.status == 200) {
        let products = response.data;
        let productCont = document.getElementById(divName);
        printToWindowByCategory(productCont, products);
      }
    })
    .catch(function (error) {
      console.log("you are in getting products catch");
    });
}
function printToWindowByCategory(divElement, resultArray) {
  for (let i = 0; i < resultArray.length; i++) {
    divElement.innerHTML += `<section>
      <img src="${resultArray[i].images[0]}"/>
      <article>
      <p>${resultArray[i].name}</p>
      <p>${resultArray[i].description}</p>
      <h1>${resultArray[i].price + " ₪"}</h1>
      <button onclick="axiosAddToCart('${resultArray[i]._id}')" id="addBtn">
      add to cart</button>
      <button onclick="deleteProductById('${
        resultArray[i]._id
      }')" id="deleteBtn">delete product</button>
      <button onclick="addToLikedItems(${resultArray[i]._id})" id="likeBtn">
      <img src="https://img.icons8.com/ios-glyphs/30/000000/like--v1.png"/></button>
      </article>
      </section>`;
  }
}

function axiosAddToCart(productId) {
  axios
    .patch("/carts/add/6183162cd7907e590851e05a", {
      _id: productId,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log("you are in add to cart catch");
      console.log(error);
    });
}

itemsArray = [];

function cartItemsCounter(id) {
  for (let i = 0; i < cartArray.length; i++) {
    if (id === cartArray[i]._id) {
      itemsArray.push(cartArray[i]);
      itemCounter.innerHTML = `<p id="counter">${itemsArray.length}</p>`;
    }
  }
}

function addToLikedItems(id) {
  for (let i = 0; i < resultArray.length; i++) {
    if (id === resultArray[i]._id) {
      likedItemsArray.push(resultArray[i]);
      likeCounter.innerHTML = `<p id="saveItem">${likedItemsArray.length}</p>`;
    }
  }
}

function showMobileNav() {
  let navLinks = document.getElementById("navLinks");
  if (navLinks.className === "navBarCont") {
    navLinks.className += " responsive";
  } else {
    navLinks.className = "navBarCont";
  }
}

function showAdminOptions() {
  let adminOptionsCont = document.getElementById("adminOptionsCont");
  adminOptionsCont.innerHTML += `
    <a href="./addProducts.html">create product</a>
    <a href="./updateProducts.html">update product</a>
    <a href="./allMessages.html">client messages</a>`;
}

function displayNone() {
  adminOptionsCont.style.display = "none";
}

function updateProductById(e) {
  e.preventDefault();
  const name = document.getElementById("name").value,
    price = document.getElementById("price").value,
    description = document.getElementById("description").value,
    category = document.getElementById("category").value,
    image1 = document.getElementById("imageOne").value,
    image2 = document.getElementById("imageTwo").value;

  axios
    .patch(`/products/${id}`, {
      name: name,
      price: price,
      description: description,
      category: category,
      images: [image1, image2],
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log("you are in update product by Id catch");
    });
}

function deleteProductById(id) {
  axios
    .delete(`/products/${id}`)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log("you are in the delete by ID catch");
    });
}
function insertNewProduct(e) {
  e.preventDefault();
  const name = document.getElementById("name").value,
    price = document.getElementById("price").value,
    description = document.getElementById("description").value,
    category = document.getElementById("category").value,
    image1 = document.getElementById("imageOne").value,
    image2 = document.getElementById("imageTwo").value;
  axios
    .post("/products", {
      name: name,
      price: Number(price),
      description: description,
      category: category,
      images: [image1, image2],
    })
    .then(function (response) {
      console.log(response);
      alert(`The new product ${name} added to the database!`);
    })
    .catch(function (error) {
      console.log("you are in the create product catch");
      console.log(error);
    });
}

function insertNewContact(e) {
  e.preventDefault();
  const name = document.getElementById("Full Name").value,
    email = document.getElementById("Email").value,
    message = document.getElementById("message").value;
  axios
    .post("/contacts", {
      name: name,
      email: email,
      message: message,
    })
    .then(function (response) {
      console.log(response);
      alert("Your message was sent successfully");
    })
    .catch(function (error) {
      console.log("you are in the create message catch");
    });
}

function getAllMessages(e) {
  e.preventDefault();
  axios
    .get("/contacts")
    .then(function (response) {
      let messages = response.data;
      for (i = 0; i < messages.length; i++) {
        document.getElementById("messagesCont").innerHTML += `
        <table>
        <tr>
          <td id=messagesTD>
          <p class="messPara">${messages[i].name}</p>
         <p class="messPara">${messages[i].email}</p>
         <p class="messPara">${messages[i].message}</p>
         </td>
        </tr>
      </table>
      `;
      }
    })
    .catch(function (error) {
      console.log("you are in get messages catch");
    });
}
