'use strict';

describe('Unit Test for airport', function() {
      var plane;
      var airport;

      beforeEach(function(){
        plane = new Plane();
        airport = new Airport();
          });

  it ("allows a plane to land", function () {
    airport.land(plane);
    expect(airport.planes()).toContain(plane);
  });

  it ("allows a plane to take off", function() {
    airport.takeOff(plane);
    expect(airport.planes()).not.toContain(plane);
  });

  it ("does not allow a plane to land if the airport is full", function() {
    var times = 20;
    for(var i=0; i < times; i++){
    airport.land(plane);
    };
   expect(function(){airport.land(plane);}).toThrow("The airport is full");
 });

});
