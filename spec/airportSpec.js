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
});
