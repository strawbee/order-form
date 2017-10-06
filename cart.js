'use strict';

var itemsInCart = JSON.parse(localStorage['cart']);
var userInfo = JSON.parse(localStorage['info']);
var productsSelected = document.getElementById('productsSelected');
var displayInfo = document.getElementById('displayInfo');
var lastFourOfCard = userInfo.card.slice(-4);
var itemsToRemove = [];
var checkedItems = document.getElementsByName('productsInCart');

function removeItem(event) {
  event.preventDefault();

  var valueOfCheckedItem, currentName;
  for (var j = 0; j < checkedItems.length; j++) {
    if (checkedItems[j].checked === true) {
      valueOfCheckedItem = checkedItems[j].value;
      for (var x = 0; x < itemsInCart.length; x++) {
        if (valueOfCheckedItem === itemsInCart[x].name) {
          itemsToRemove.push(itemsInCart[x].name);
        }
      }
    }
  }

  for (var k = itemsInCart.length - 1; k >= 0; k--) {
    currentName = itemsInCart[k].name;
    if (itemsToRemove.includes(currentName)) {
      itemsInCart.splice(k, 1);
    }
  }
  localStorage['cart'] = JSON.stringify(itemsInCart);
  document.getElementById('itemRemovedP').style.display = 'block';
  document.getElementById('shoppingCart').style.display = 'none';
}

if (localStorage) {
  for (var i = 0; i < itemsInCart.length; i++) {
    productsSelected.innerHTML += '<input type=\"checkbox\" name=\"productsInCart\" value=\"' + itemsInCart[i].name + '\" \\> ' + itemsInCart[i].name + ' [Quantity: ' + itemsInCart[i].number + ']<br /><img class=\"cartItem\" src=\"' + itemsInCart[i].image + '\"><br />';
  }

  var removeItemButton = document.getElementById('shoppingCart');
  removeItemButton.addEventListener('submit', removeItem);

  displayInfo.innerHTML = 'Name: ' + userInfo.name + '<br />Address: ' + userInfo.street + ', ' + userInfo.city + ', ' + userInfo.state.toUpperCase() + ' ' + userInfo.zip + '<br />Phone Number: ' + userInfo.phone + '<br />Last Four Digits Of Card: ' + lastFourOfCard;
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

var confirmButton = document.getElementById('confirmButton');
confirmButton.addEventListener('click', orderConfirmed);
