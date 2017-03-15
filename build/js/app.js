(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Bike(){
}


// var bikeArray = [];

Bike.prototype.findBikes = function(location, displayFunction) {
  $.get("https://bikeindex.org:443/api/v3/search?page=1&per_page=25&location="+ location + "&distance=10&stolenness=proximity&access_token=4e7b88c7343fe7d642db50104a7afc73f05fb20bf657399c298c08307c689b4e").then(function(response) {
    // console.log("this works");
    response.bikes.forEach(function(bike){
      displayFunction(bike);
      // bikeArray.push(bike);
      console.log("this works");
    });
  })
  .fail(function(error) {
    $('search-result').text(error.responseJSON.message);
  });
};

exports.bikeModule = Bike;
// exports.findBikeModule = findBikes;
// exports.bikeArrayModule = bikeArray;

},{}],2:[function(require,module,exports){
var Bike = require('./../js/bike.js').bikeModule;
// var findBikes = require("./../js/bike.js").findBikeModule;
// var bikeArray = require("./../js/bike.js").bikeArrayModule;

function displayBike(bike) {
    $('.search-result').append("<li>" + bike.title + "</li>");

}

$(document).ready(function(){
    var currentBike = new Bike();
    $("#find-bike").submit(function(event){
      event.preventDefault();
    var location = $('#location').val();
    $('#location').val();
    currentBike.findBikes(location, displayBike);
  });
});

},{"./../js/bike.js":1}]},{},[2]);
