function Vehicle(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.isRunning = false;
}

Vehicle.prototype.turnOn = function() {
  this.isRunning = true;
}

Vehicle.prototype.turnOff = function() {
  this.isRunning = false;
}

Vehicle.prototype.honk = function() {
  if (this.isRunning) return "beep!";
}

var myCar = new Vehicle('Adam West\'s Car', 'Batmobile', '1969');
console.log(myCar);
console.log(myCar.honk());
myCar.turnOn();
console.log(myCar.honk());
myCar.turnOff();
console.log(myCar.honk());