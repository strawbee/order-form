'use strict';

var itemsInCart = JSON.parse(localStorage['cart']);


var productsSelected = document.getElementById('productsSelected');


if (localStorage) {
  for (var i = 0; i < itemsInCart.length; i++) {
    productsSelected.innerHTML = itemsInCart[i].name + ' | Number Ordered: ' + itemsInCart[i].number + '<br /><img src=\"' + itemsInCart[i].image + '\">';
  }
}
