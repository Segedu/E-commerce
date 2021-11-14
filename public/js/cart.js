let tableCartDiv = document.getElementById("tableCartDiv"),
  dataTable = document.getElementById("dataTable"),
  total = document.getElementById("totalSum"),
  priceCont = document.getElementsByClassName("priceCont"),
  quantity = document.getElementsByClassName("quantity"),
  quantityArr = [],
  cartArray;

function getCartById() {
  axios
    .get("/carts/6183162cd7907e590851e05a")
    .then(function (response) {
      if (response.status == 200) {
        cartArray = response.data.products;
        showUpdatedCart(cartArray);
        console.log("cart array:", cartArray);
      }
    })
    .catch(function (error) {
      console.log("you are in get cart by id catch");
      console.log(error);
    });
}

function showUpdatedCart(cartArray) {
  for (let i = 0; i < cartArray.length; i++) {
    dataTable.innerHTML += `<tr id="${cartArray[i]._id}">
      <td>
      <article id="tabArticle"><img src="${cartArray[i].images[0]}"/>
      <p id="pName">${cartArray[i].name}</p>
      <p>${cartArray[i].price}₪</p>
      <input oninput="changeQuantity()" class="quantity" type="number" value="1">
      <h1 class="priceCont">${cartArray[i].price}₪</h1>
      <button onclick="deleteProdFromCart('${cartArray[i]._id}')" id="removeBtn">
      <i class="fas fa-trash-alt"></i></button></article></td>  
      </tr> `;
    quantityArr.push(cartArray[i]);
    total.innerHTML = `<h3> Total: ${calculateSum(cartArray)}₪
  </h3><article id="totCont"><button id="checkoutBtn">Checkout</button></article>`;
  }
}

function changeQuantity() {
  for (let i = 0; i < cartArray.length; i++) {
    if (quantity[i].value >= 1 && !undefined) {
      let price = cartArray[i].price;
      let totalPerItem = price * quantity[i].value;
      quantityArr[i].price = totalPerItem;
      priceCont[i].innerHTML = `${totalPerItem}₪`;
      total.innerHTML = `<h3> Total: ${calculateSum(quantityArr)}₪</h3>
      <article id="totCont"><button id="checkoutBtn">Checkout</button></article>`;
    }
  }
  console.log("quantity array:", quantityArr);
}

function deleteProdFromCart(productId) {
  axios
    .patch(`/carts/delete/6183162cd7907e590851e05a`, {
      _id: productId,
    })
    .then(function (response) {
      console.log("hey");
      if (response.status == 200) {
        deleteFromCart(productId);
      }
    })
    .catch(function (error) {
      console.log("you are in the delete product from cart catch");
      console.log(error);
    });
}

function deleteFromCart(id) {
  for (let i = 0; i < cartArray.length; i++) {
    if (cartArray[i]._id === id) {
      cartArray.splice(i, 1);
      document.getElementById(id).innerHTML = "";
      const sum = calculateSum(cartArray);
      total.innerHTML = `<h3>Total: ${
        sum + "₪"
      }</h3><article id="totCont"><button id="checkoutBtn">Checkout</button></article>`;
    }
  }
}

function calculateSum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i].price;
  }
  return sum;
}
