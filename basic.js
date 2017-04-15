const fs = require("fs");

class BasicCard {
  constructor(front, back) {
    this.front = front;
    this.back = back;
  }

  storeCard() {
    var card = {
      front: this.front,
      back: this.back
    };

    fs.readFile("./data.json", "utf8", function(error, data) {
      if (error) throw error;

      var obj = JSON.parse(data);
      obj["basic"].push(card);

      fs.writeFile("./data.json", JSON.stringify(obj), function(error) {
        if (error) throw error;
        console.log("Your card has been added!");
      });
    });
  }
}

module.exports = BasicCard;