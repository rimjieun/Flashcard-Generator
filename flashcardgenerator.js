const BasicCard = require("./basiccard");
const ClozeCard = require("./clozecard");
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
    console.log(newBasic);
    console.log(newBasic.front);
    console.log(newBasic.back);
    newBasic.storeCard("basiccard.json.channel", newBasic);
  })
  
}

if (type === "cloze") {
  inquirer.prompt([
    {
      type: "input",
      message: "Question:",
      name: "question"
    },
    {
      type: "input",
      message: "Answer",
      name: "answer"
    }
  ]).then(function(user) {
    var newCloze = new ClozeCard(user.question, user.answer);
    console.log(newCloze.partial());  
  })
}