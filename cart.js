'use strict';

var itemsInCart = JSON.parse(localStorage['cart']);
var userInfo = JSON.parse(localStorage['info']);
var productsSelected = document.getElementById('productsSelected');
var displayInfo = document.getElementById('displayInfo');
var lastFourOfCard = userInfo.card.slice(-4);

function removeItem() {
  var checkedItems = document.getElementsByName('productsInCart');
  var valueOfCheckedItem;

  for (var j = 0; j < checkedItems.length; j++) {
    if (checkedItems[j].checked === true) {
      valueOfCheckedItem = checkedItems[j].value;
      for (var x = itemsInCart.length - 1; x >= 0; x--) {
        if (valueOfCheckedItem === itemsInCart[x].name) {
          itemsInCart.splice(x, 1);
        }
      }
    }
  }

  localStorage['cart'] = JSON.stringify(itemsInCart);
}

function orderConfirmed() {
  if(itemsInCart.length > 0) {
    document.getElementById('shoppingCartItems').style.display = 'none';
    document.getElementById('orderConfirmed').style.display = 'block';
    localStorage.clear();
  } else {
    document.getElementById('confirmValidation').textContent = 'You need to have an item in your cart.';
  }
}

if (itemsInCart.length > 0) {
  for (var i = 0; i < itemsInCart.length; i++) {
    productsSelected.innerHTML += '<input type=\"checkbox\" name=\"productsInCart\" value=\"' + itemsInCart[i].name + '\" \\> ' + itemsInCart[i].name + ' [Quantity: ' + itemsInCart[i].number + ']<br /><img class=\"cartItem\" src=\"' + itemsInCart[i].image + '\"><br />';
  }

  var removeItemButton = document.getElementById('shoppingCart');
  removeItemButton.addEventListener('submit', removeItem);

  displayInfo.innerHTML = 'Name: ' + userInfo.name + '<br />Address: ' + userInfo.street + ', ' + userInfo.city + ', ' + userInfo.state.toUpperCase() + ' ' + userInfo.zip + '<br />Phone Number: ' + userInfo.phone + '<br />Last Four Digits Of Card: ' + lastFourOfCard;
}

var confirmButton = document.getElementById('confirmButton');
confirmButton.addEventListener('click', orderConfirmed);
