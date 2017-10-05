'use strict';


if (localStorage.itemsInCart) {
  Products.ordered = JSON.parse(localStorage['cart']);
} else {
  Products.ordered = [];
}

if (localStorage.userInfoStored) {
  Products.userInfo = localStorage['info'];
  document.getElementById('userInfo').style.display = 'none';
  document.getElementById('userInfoSaved').style.display = 'block';
}

function clearInfo() {
  localStorage.removeItem('info');
  document.getElementById('userInfo').style.display = 'block';
  document.getElementById('userInfoSaved').style.display = 'none';
}
var clearUserInfo = document.getElementById('clearUserInfo');
clearUserInfo.addEventListener('click', clearInfo);

function Products(name, url) {
  this.name = name;
  this.url = url;
  this.number = 0;
  Products.all.push(this);
}

Products.all = [];

new Products('Travel Bag', 'images/bag.jpg');
new Products('Banana Cutter', 'images/banana.jpg');
new Products('Bathroom Ipad Holder', 'images/bathroom.jpg');
new Products('Boots', 'images/boots.jpg');
new Products('Breakfast Maker', 'images/breakfast.jpg');
new Products('Meatball Bubble Gum', 'images/bubblegum.jpg');
new Products('Chair', 'images/chair.jpg');
new Products('Cthulhu', 'images/cthulhu.jpg');
new Products('Duck-Beaked Dog', 'images/dog-duck.jpg');
new Products('Dragon Meat', 'images/dragon.jpg');
new Products('Pen Cutlery', 'images/pen.jpg');
new Products('Pet Sweep Shoes', 'images/pet-sweep.jpg');
new Products('Scissors', 'images/scissors.jpg');
new Products('Shark Sleeping Bag', 'images/shark.jpg');
new Products('Baby Sweep Onesie', 'images/sweep.png');
new Products('Tauntaun Sleeping Bag', 'images/tauntaun.jpg');
new Products('Unicorn Meat', 'images/unicorn.jpg');
new Products('Tentacle USB', 'images/usb.gif');
new Products('Self Watering Can', 'images/water-can.jpg');
new Products('Wine Glass', 'images/wine-glass.jpg');

for (var i = 0; i < Products.all.length; i++) {
  document.getElementById('productsList').innerHTML += '<option value=\"' + Products.all[i].name + '\">' + Products.all[i].name + '</option>';
}

// Products for Shopping Cart

function addToCart(event) {
  event.preventDefault();
  var productName = event.target.productsList.value;
  var productNum = event.target.numProduct.value;
  var productImage;

  for (var j = 0; j < Products.all.length; j++) {
    if (productName === Products.all[j].name) {
      productImage = Products.all[j].url;
      Products.ordered.push(
        {
          name: productName,
          number: productNum,
          image: productImage
        }
      );
    }
  }
  localStorage['cart'] = JSON.stringify(Products.ordered);
  document.getElementById('itemConfirmed').innerHTML += productName + ' [' + productNum + '] has been added to cart. <br />';
  localStorage.itemsInCart = true;
  orderProducts.reset();
}

var productsForm = document.getElementById('orderProducts');
productsForm.addEventListener('submit', addToCart);

// Submit user info and go to cart page
function goToCart(event) {
  var userName = event.target.userName.value;
  var userStreet = event.target.userStreet.value;
  var userCity = event.target.userCity.value;
  var userState = event.target.userState.value;
  var userZip = event.target.userZip.value;
  var userPhone = event.target.userPhone.value;
  var userCreditCard = event.target.userCreditCard.value;

  Products.userInfo = {
    name: userName,
    street: userStreet,
    city: userCity,
    state: userState,
    zip: userZip,
    phone: userPhone,
    card: userCreditCard
  };

  localStorage['info'] = JSON.stringify(Products.userInfo);
  localStorage.userInfoStored = true;
}

var submitUserInfo = document.getElementById('userInfo');
submitUserInfo.addEventListener('submit', goToCart);
