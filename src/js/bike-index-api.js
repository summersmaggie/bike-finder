export function getBikes(location) {
  $.get(`https://bikeindex.org:443/api/v3/search?page=1&per_page=25&location=${location}&distance=10&stolenness=stolen`).then(function(response) {
    $('.show-text').text(`The following bikes have been stolen in your area:`);
    for(let i = 0; i < response.length, i++) {
      let bike = `${response[i].Title}`
      $('.stolen-bikes').append(" " + '<li>' + bike + ',' + '</li>');
    }
  });
});
