const fs = require("fs");

class ClozeCard {
  constructor(text, cloze) {
    this.text = text;
    this.cloze = cloze;
    this.partial = function() {
      if (this.text.includes(this.cloze)) {
        return this.text.replace(this.cloze, "...");
      }
      else {
        console.log("That cloze doesn't exist in the text.");
      }
    };
  }

  storeCard(file, obj) {
    fs.appendFile(file, obj, function(error) {
      if (error) {
        throw error;
      }
    });
  }
}

module.exports = ClozeCard;