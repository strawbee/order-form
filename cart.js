'use strict';

var itemsInCart = JSON.parse(localStorage['cart']);
var userInfo = JSON.parse(localStorage['info']);

var productsSelected = document.getElementById('productsSelected');
var displayInfo = document.getElementById('displayInfo');
var lastFourOfCard = userInfo.card.slice(-4);

if (localStorage) {
  for (var i = 0; i < itemsInCart.length; i++) {
    productsSelected.innerHTML += '<input type=\"checkbox\" name=\"productsInCart\" value=\"' + itemsInCart[i].name + '\" \\> ' + itemsInCart[i].name + ' | Number Ordered: ' + itemsInCart[i].number + '<br /><img src=\"' + itemsInCart[i].image + '\"><br />';
  }

var itemsToRemove = [];

  function removeItem(event) {
    event.preventDefault();
    var checkedItems = document.getElementsByName('productsInCart');
    for (var j = 0; j < checkedItems.length; j++) {
      if (checkedItems[j].checked === true) {
        itemsToRemove.push(itemsInCart[j].name);
      }
    }
    for (var k = 0; k < itemsInCart.length; k++) {
      var currentName = itemsInCart[k].name;
      if (itemsToRemove.includes(currentName)) {
        itemsInCart.splice(k, 1);
      }
    }
    localStorage['cart'] = JSON.stringify(itemsInCart);
    document.getElementById('itemRemovedP').style.display = 'block';
    document.getElementById('shoppingCart').style.display = 'none';
  }

  var removeItemButton = document.getElementById('shoppingCart');
  removeItemButton.addEventListener('submit', removeItem);

  displayInfo.innerHTML = 'Name: ' + userInfo.name + '<br />Address: ' + userInfo.street + ', ' + userInfo.city + ', ' + userInfo.state + ' ' + userInfo.zip + '<br />Last Four Digits Of Card: ' + lastFourOfCard;

}
