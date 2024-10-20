// models/Rooms.js
const Services = require('./Services');

class Rooms {
  constructor(name, price, description, room_type, service_type) {
    this.name = name;
    this.price = price;
    this.description = description;
    this.room_type = room_type;
    this.service_type = service_type;
  }
}

module.exports = Rooms;
