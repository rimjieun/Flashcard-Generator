const fs = require("fs");

class ClozeCard {
  constructor(text, cloze) {
    if (!text.includes(cloze)) {
      console.log("That cloze does not exist in the text.\nPlease input an appropriate cloze text to be deleted.");
      this.isValid = false;
    } else {
      this.isValid = true;
      this.text = text;
      this.cloze = cloze;
      this.partial = function() {
        return text.replace(cloze, "...");
      };
    }
    
  }

  storeCard() {
    var card = {
      text: this.text,
      cloze: this.cloze,
    };

    fs.readFile("./data.json", "utf8", function(error, data) {
      if (error) throw error;

      var obj = JSON.parse(data);
      obj["cloze"].push(card);

      fs.writeFile("./data.json", JSON.stringify(obj), function(error) {
        if (error) throw error;
        console.log("Your card has been added!");
      });
    });
  }
}

module.exports = ClozeCard;