export class bikeAPI {
  constructor(name, location) {
    this.name = name;
    this.location = location;
    // this.displayManufacturer = displayManufacturer;
    // this.displayColor = displayColor;
    // this.displayYear = displayYear;
  }

  getBikes(name, location, displayBikes) {
    const bikeKey = process.env.BIKE_INDEX_API_KEY;

    $.get(`https://bikeindex.org:443/api/v3/search?page=1&per_page=25&location=${location}&distance=10&stolenness=stolen&api_key=${bikeKey}&stolenness=proximity`).then(function(response) {
        displayBikes(response);
      })
      .fail(function(error) {
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

  // getColor(location) {
  //   const bikeKey = process.env.BIKE_INDEX_API_KEY;
  //
  //   $.get(`https://bikeindex.org:443/api/v3/search?page=1&per_page=25&location=${location}&distance=10&stolenness=stolen&api_key=${bikeKey}&stolenness=proximity`).then(function(response) {
  //         for(let i = 0; i < response.bikes.length; i++) {
  //         let bikeColor = response.bikes[i].frame_colors;
  //         $('.bike-color').append(" " + '<li>' + bikeColor + '</li>');
  //       }
  //     }).fail(function(error) {
  //       $('.api-error').text(`There was an error processing your request: ${error.responseText}. Please try again.`);
  //     });
  //   }
  //
  // getYear(location) {
  //   const bikeKey = process.env.BIKE_INDEX_API_KEY;
  //
  //   $.get(`https://bikeindex.org:443/api/v3/search?page=1&per_page=25&location=${location}&distance=10&stolenness=stolen&api_key=${bikeKey}&stolenness=proximity`).then(function(response) {
  //         for(let i = 0; i < response.bikes.length; i++) {
  //         let year = response.bikes[i].year;
  //         $('.year').append(" " + '<li>' + year + '</li>');
  //       }
  //     }).fail(function(error) {
  //       $('.api-error').text(`There was an error processing your request: ${error.responseText}. Please try again.`);
  //     });
  //   }
}
