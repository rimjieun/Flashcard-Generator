const BasicCard = require("./basic");
const ClozeCard = require("./cloze");
const inquirer = require("inquirer");


var type = process.argv[2];

if (type === "basic") {
  inquirer.prompt([
    {
      type: "input",
      message: "Question:",
      name: "question"
    },
    {
      type: "input",
      message: "Answer:",
      name: "answer"
    }
  ]).then(function(user) {
    var newBasic = new BasicCard(user.question, user.answer);
    newBasic.storeCard();
  });
  
}

if (type === "cloze") {
  inquirer.prompt([
    {
      type: "input",
      message: "Text:",
      name: "question"
    },
    {
      type: "input",
      message: "Cloze:",
      name: "answer"
    }
  ]).then(function(user) {
    var newCloze = new ClozeCard(user.question, user.answer);
    if (newCloze.isValid) {
      newCloze.storeCard();
    }
  });
}