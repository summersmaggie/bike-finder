export class bikeAPI {
  constructor(name, location) {
    this.name = name;
    this.location = location;
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
}
