const BasicCard = require("./basic");
const ClozeCard = require("./cloze");
const inquirer = require("inquirer");

inquirer.prompt([
  {
    type: "list",
    message: "What kind of flashcard do you want to make?",
    choices: ["Basic", "Cloze"],
    name: "type"
  }
]).then(function(card) {
  if (card.type === "Basic") {
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

  if (card.type === "Cloze") {
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
});