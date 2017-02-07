'use strict';

$(document).ready(function () {

  let output = $('#output');

  function pullCategories() {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: "data/categories.json"
      }).done(function(data) {
        resolve(data);
      }).fail((error) => {
        reject(error);
      });
    });
  }

  function pullProducts() {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: "data/products.json"
      }).done(function(data) {
        resolve(data);
      }).fail((error) => {
        reject(error);
      });
    });
  }

  function pullTypes() {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: "data/types.json"
      }).done(function(data) {
        resolve(data);
      }).fail((error) => {
        reject(error);
      });
    });
  }

  pullCategories()
  .then((dataCategories) => {
    showCategories(dataCategories.categories);
    dropdown(dataCategories.categories);
    return pullProducts();
  })
  .then((dataProducts) => {
    showProducts(dataProducts.products[0]);
    return pullTypes();
  })
  .then((dataTypes) => {
    showTypes(dataTypes.types);
  });

  function dropdown(dataCategories) {
    var categoryKeys = Object.keys(dataCategories);
    let input = $('#input');

    for (var i = 0; i < dataCategories.length; i++) {
      var pullCats = categoryKeys[i];
      var productNames = dataCategories[pullCats]['name'];
      $('#selections').append(`<option id= ${i}> ${productNames} </option>`);
    }
  }

  function showProducts(dataProducts) {
    var productKeys = Object.keys(dataProducts);
    let output = $('#output');

    for (var i = 0; i < productKeys.length; i++) {
      var pullProds = productKeys[i];
      var productNames = dataProducts[pullProds]['name'];
      var productDescriptions = dataProducts[pullProds]['description'];

      $(output).append(`<p class="col-md-6">${productNames} - ${productDescriptions}</p>`);
    }
  }

  function showCategories(dataCategories) {
    var categoryKeys = Object.keys(dataCategories);
    for (var i = 0; i < dataCategories.length; i++) {
      var pullCats = categoryKeys[i];
      var productNames = dataCategories[pullCats]['name'];
      console.log(productNames);
    }
  }

  function showTypes(dataTypes) {
    for (var i = 0; i < dataTypes.length; i++) {
      console.log(dataTypes[i]['name']);
    }
  }

});
