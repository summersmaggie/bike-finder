import { bikeAPI } from './js/bike-index.js';
import './styles.css' ;

$(document).ready(function() {
  $('#cyclist-form').submit(function(event) {
    event.preventDefault();

    const name = $("#name").val();
    const location = $("#location").val();
    $("#cyclist-form").hide();

    let myBikeAPI = new bikeAPI(name, location);
    myBikeAPI.getBikes(name, location);
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
  });
});

let displaySuccess = function(response) {


}
