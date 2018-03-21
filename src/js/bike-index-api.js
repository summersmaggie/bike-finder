export function getBikes(location) {
  const bikeKey = process.env.BIKE_INDEX_API_KEY;

  $.get(`https://bikeindex.org:443/api/v3/search?page=1&per_page=25&location=${location}&distance=10&stolenness=stolen&api_key=${bikeKey}`).then(function(response) {
    $('.show-text').text(`The following bikes have been stolen in your area:`);
    for(let i = 0; i < response.bikes.length; i++) {
      let bike = response.bikes[i].title;
      console.log(bike);
      $('.stolen-bikes').append(" " + '<li>' + bike + '</li>');
    }
  });
}
