
function axiosByCategory(route) {
  const divName = `${route}Cont`;
  const productsRoute = "/products";
  axios
    .get(`${productsRoute}/${route}`)
    .then(function (response) {
      if (response.status == 200) {
        let serverData;
        serverData = response.data;
        let bedRCont = document.getElementById(divName);
        let bathCont = document.getElementById(divName);
        let livingCont = document.getElementById(divName);
        let kitchenCont = document.getElementById(divName);
        printToWindowByCategory(kitchenCont, serverData);
        printToWindowByCategory(bedRCont, serverData);
        printToWindowByCategory(livingCont, serverData);
        printToWindowByCategory(bathCont, serverData);
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
      <button onclick="addToCart(${resultArray[i].id})" id="addBtn">
      add to cart</button>
      <button onclick="addTolikedItems(${
        resultArray[i].id
      })" id="likeBtn"><img src="https://img.icons8.com/ios-glyphs/30/000000/like--v1.png"/></button>
      </article>
      </section>`;
  }
}

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

function insertNewProduct(e) {
  e.preventDefault();
  const
   name = document.getElementById("name").value,
    price = document.getElementById("price").value,
    description = document.getElementById("description").value,
    category = document.getElementById("category").value,
    image1 = document.getElementById("imageOne").value,
    image2 = document.getElementById("imageTwo").value;
    let newObj={
      name:name,
      price:price,
      description:description,
      category:category,
      images=[image1,image2]
    }
    axios.post("/products",{
      newObj
    }).then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log("you are in the create product catch");
    });
}

function insertNewContact(e) {
  e.preventDefault();
  const name = document.getElementById("Full Name").value,
    email = document.getElementById("Email").value,
    message = document.getElementById("message").value;
  let contactObj = {
    name: name,
    email: email,
    message: message,
  };
  console.log(contactObj);
  axios
    .post("/contacts", {
      contactObj,
    })
    .then(function (response) {
      console.log(response);
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
      console.log(response.data);
    })
    .catch(function (error) {
      console.log("you are in get messages catch");
    });
}
