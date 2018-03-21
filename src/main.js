import { bikeAPI } from './js/bike-index.js';
import './styles.css' ;

const displayBikes = function(title, serial) {
  $('.stolen-bikes').append(`<li>${title} ${serial}</li>`);
}

// const displayManufacturer = function(title, serial) {
//   $('#greatDisplay').append(`<div>${title}${serial}</div>`);
// }
//
// const displayColor = function(title, serial) {
//   $('#greatDisplay').append(`<div>${title}${serial}</div>`);
// }
//
// const displayYear = function(title, serial) {
//   $('#greatDisplay').append(`<div>${title}${serial}</div>`);
// }

$(document).ready(function() {
  $('#cyclist-form').submit(function(event) {
    event.preventDefault();

    const name = $("#name").val();
    const location = $("#location").val();
    $("#cyclist-form").hide();

    let myBikeAPI = new bikeAPI(name, location, displayBikes);
    myBikeAPI.getBikes(name, location, displayBikes);
    $("#search").show();

    $("#manufacturer").click(function() {
      $(".stolen-bikes").hide();
      $(".show-text").hide();
      myBikeAPI.getManufacturer(location);
    });

    $("#color").click(function() {
      $(".stolen-bikes").hide();
      $(".show-text").hide();
      $(".bike-manufacturer").hide();
      myBikeAPI.getColor(location);
    });

    $("#year").click(function() {
      $(".stolen-bikes").hide();
      $(".show-text").hide();
      $(".bike-manufacturer").hide();
      $(".bike-color").hide();
      myBikeAPI.getYear(location);
    });
  });
});
