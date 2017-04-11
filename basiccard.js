const fs = require("fs");

class BasicCard {
  constructor(front, back) {
    this.front = front;
    this.back = back;
  }

  storeCard(file, obj) {
    var data = JSON.stringify(obj);
    fs.appendFile(file, data, function(error) {
      if (error) {
        throw error;
      }
    });
  }
}

module.exports = BasicCard;