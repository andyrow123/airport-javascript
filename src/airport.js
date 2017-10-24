function Airport() {
this._planes = []
this._capacity = 20
};

Airport.prototype.planes = function() {
  return this._planes
};

Airport.prototype.capacity = function() {
  return this._capacity
};

Airport.prototype.land = function(plane) {
  if (this._planes.length >= this._capacity) throw 'The airport is full';
  this._planes.push(plane);
};

Airport.prototype.takeOff = function(plane) {
  this._planes.splice( this._planes.indexOf(plane), 1 );
}
