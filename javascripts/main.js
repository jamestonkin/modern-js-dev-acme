'use strict';

let $ = require('jquery'),
    pull = require("./datapull");

pull.pullCategories()
  .then((dataCategories) => {
    dropdown(dataCategories.categories);
});

function dropdown(dataCategories) {
  var categoryKeys = Object.keys(dataCategories);
  let input = $('#input');

  for (var i = 0; i < dataCategories.length; i++) {
    var pullCats = categoryKeys[i];
    var categoryNames = dataCategories[pullCats].name;
    $('#selections').append(`<option id= ${i}> ${categoryNames} </option>`);
  }
}
