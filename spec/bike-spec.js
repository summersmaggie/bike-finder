import { Cyclist } from './../src/js/cyclist.js'

describe('Cyclist', function() {
  let portlander;

  beforeEach(function() {
    portlander = new Cyclist("Maggie", "Portland");
  });

  it('should create a new Cyclist with name and location', function(){
    expect(portlander.name).toEqual("Maggie");
    expect(portlander.location).toEqual("Portland");
  });
});
