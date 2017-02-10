'use strict';

let $ = require('jquery');

function pullCategories() {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: "../data/categories.json"
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
      url: "../data/products.json"
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
      url: "../data/types.json"
    }).done(function(data) {
      resolve(data);
    }).fail((error) => {
      reject(error);
    });
  });
}


module.exports = {
  pullTypes,
  pullCategories,
  pullProducts
};
