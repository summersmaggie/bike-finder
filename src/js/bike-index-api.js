export function getBikes(location, name) {
  const bikeKey = process.env.BIKE_INDEX_API_KEY;

  $.get(`https://bikeindex.org:443/api/v3/search?page=1&per_page=25&location=${location}&distance=10&stolenness=stolen&api_key=${bikeKey}&stolenness=proximity`).then(function(response) {
    $('.show-text').text(`The following bikes have been stolen in your area, ${name}:`);
      if (response.bikes.length == 0) {
        $('.stolen-bikes').text(`Congratulations, there are no stolen bikes in your area!`);
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
