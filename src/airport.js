function Airport() {
this._planes = []
};

Airport.prototype.planes = function() {
  return this._planes
};

Airport.prototype.land = function(plane) {
this._planes.push(plane)
};

Airport.prototype.takeOff = function(plane) {
  this._planes.splice( this._planes.indexOf(plane), 1 );
}
