import { Cyclist } from './js/cyclist.js';
import { getBikes } from './js/bike-index-api.js';
import './styles.css' ;

$(document).ready(function() {
  $('#cyclist-form').submit(function(event) {
    event.preventDefault();
    const name = $("#name").val();
    const location = $("#location").val();
    $("#cyclist-form").hide();

    getBikes(location, name);
  });
});
