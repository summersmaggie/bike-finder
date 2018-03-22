import { bikeAPI } from './js/bike-index.js';
import './styles.css' ;

const displayBikes = function(response) {
    if (response.bikes.length == 0) {
      console.log(response.bikes.length);
      $('.stolen-bikes').text("There are no stolen bikes in your area!");
    } else {
      for(let i = 0; i < response.bikes.length; i++) {
      let stolenBikes = response.bikes[i].title;
      $('.stolen-bikes').append(" " + '<li>' + stolenBikes + '</li>');
    }
  }
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

  let newBikeAPI = new bikeAPI(name, location);

  $('#cyclist-form').submit(function(event) {
    event.preventDefault();

    const name = $("#name").val();
    const location = $("#location").val();
    $("#cyclist-form").hide();

    newBikeAPI.getBikes(name, location, displayBikes);


    $("#search").show();

    // $("#manufacturer").click(function() {
    //   $(".stolen-bikes").hide();
    //   $(".show-text").hide();
    //   myBikeAPI.getManufacturer(location);
    // });
    //
    // $("#color").click(function() {
    //   $(".stolen-bikes").hide();
    //   $(".show-text").hide();
    //   $(".bike-manufacturer").hide();
    //   myBikeAPI.getColor(location);
    // });
    //
    // $("#year").click(function() {
    //   $(".stolen-bikes").hide();
    //   $(".show-text").hide();
    //   $(".bike-manufacturer").hide();
    //   $(".bike-color").hide();
    //   myBikeAPI.getYear(location);
    // });
  });
});
