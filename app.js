'use strict';

// All the Products Available
Products.all = [];

function Products(name, url) {
  this.name = name;
  this.url = url;
  Products.all.push(this);
}

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

ProductOrders.all = [];

function ProductOrders(name, number) {
  this.name = name;
  this.number = number;
  ProductOrders.all.push(this);
}

localStorage['products'] = JSON.stringify(Products.all);

for (var i = 0; i < Products.all.length; i++) {
  document.getElementById('productsList').innerHTML += '<option value=\"' + Products.all[i].name + '\">' + Products.all[i].name + '</option>';
}

function addToCart(event) {
  event.preventDefault();
  var productName = event.target.productsList.value;
  var productNum = event.target.numProduct.value;
  new ProductOrders(productName, productNum);
  console.log('test');
  localStorage['cart'] = JSON.stringify(ProductOrders.all);
}

var productsForm = document.getElementById('orderProducts');
productsForm.addEventListener('submit', addToCart);
