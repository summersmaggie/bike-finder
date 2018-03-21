export class bikeAPI {
  constructor(name, location, displaySuccess) {
    this.name = name;
    this.location = location;
  }

  getBikes(name, location) {
    const bikeKey = process.env.BIKE_INDEX_API_KEY;

    $.get(`https://bikeindex.org:443/api/v3/search?page=1&per_page=25&location=${location}&distance=10&stolenness=stolen&api_key=${bikeKey}&stolenness=proximity`).then(function(response) {
      $('.show-text').text(`The following bikes have been stolen in your area, ${name}:`);
        if (response.bikes.length == 0) {
          $('.stolen-bikes').text("Congratulations, there are no stolen bikes in your area!");
        } else {
          for(let i = 0; i < response.bikes.length; i++) {
          let bikeTitle = response.bikes[i].title;
          let bikeSerial = response.bikes[i].serial;
          $('.stolen-bikes').append(" " + '<li>' + bikeTitle +', ' + '<em>'+ bikeSerial + '</em>' + '</li>');
        }
      }
      }).fail(function(error) {
        $('.api-error').text(`There was an error processing your request: ${error.responseText}. Please try again.`);
      });
    }

  getManufacturer(location) {
    const bikeKey = process.env.BIKE_INDEX_API_KEY;

    $.get(`https://bikeindex.org:443/api/v3/search?page=1&per_page=25&location=${location}&distance=10&stolenness=stolen&api_key=${bikeKey}&stolenness=proximity`).then(function(response) {
          for(let i = 0; i < response.bikes.length; i++) {
          let bikeManufacturer = response.bikes[i].manufacturer_name;
          $('.bike-manufacturer').append(" " + '<li>' + bikeManufacturer + '</li>');
        }
      }).fail(function(error) {
        $('.api-error').text(`There was an error processing your request: ${error.responseText}. Please try again.`);
      });
    }

  getColor(location) {
    const bikeKey = process.env.BIKE_INDEX_API_KEY;

    $.get(`https://bikeindex.org:443/api/v3/search?page=1&per_page=25&location=${location}&distance=10&stolenness=stolen&api_key=${bikeKey}&stolenness=proximity`).then(function(response) {
          for(let i = 0; i < response.bikes.length; i++) {
          let bikeColor = response.bikes[i].frame_colors;
          $('.bike-color').append(" " + '<li>' + bikeColor + '</li>');
        }
      }).fail(function(error) {
        $('.api-error').text(`There was an error processing your request: ${error.responseText}. Please try again.`);
      });
    }

  getYear(location) {
    const bikeKey = process.env.BIKE_INDEX_API_KEY;

    $.get(`https://bikeindex.org:443/api/v3/search?page=1&per_page=25&location=${location}&distance=10&stolenness=stolen&api_key=${bikeKey}&stolenness=proximity`).then(function(response) {
          for(let i = 0; i < response.bikes.length; i++) {
          let year = response.bikes[i].year;
          $('.year').append(" " + '<li>' + year + '</li>');
        }
      }).fail(function(error) {
        $('.api-error').text(`There was an error processing your request: ${error.responseText}. Please try again.`);
      });
    }
}
