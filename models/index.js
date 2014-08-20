var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/TripPlanner');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongodb connection error:'));
var Place, Hotel, Restaurant, ThingsToDo;
var Schema = mongoose.Schema;

var placeSchema = new Schema({
  address: String,
  city: String,
  state: String,
  phone: String,
  location: [Number, Number]
});

var hotelSchema = new Schema({
  name: String,
  place: [placeSchema],
  num_stars: Number,
  amenities: String
});

var restaurantSchema = new Schema({
  name: String,
  place: [placeSchema],
  cuisine: String,
  price: Number
});

var thingstodoSchema = new Schema({
  name: String,
  place: [placeSchema],
  age_range: String
});


Place = mongoose.model('Place', placeSchema);
Hotel = mongoose.model('Hotel', hotelSchema);
Restaurant = mongoose.model('Restaurant', restaurantSchema);
ThingsToDo = mongoose.model('ThingsToDo', thingstodoSchema);

module.exports = {"Place": Place, "Hotel": Hotel, "Restaurant": Restaurant, "ThingsToDo": ThingsToDo};