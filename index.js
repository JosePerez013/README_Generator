// variables used to store data packages and pathways.
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/markdown.js");
// Array of questions for each section of the README.
const questions = [
  {
    name: "title",
    type: "input",
    message: "What is the title of your project?",
  },
  {
    name: "description",
    type: "input",
    message: "Describe the reasoning behind your project.",
  },
  {
    name: "installation",
    type: "input",
    message: "What steps are required to install your project?",
  },
  {
    name: "usage",
    type: "input",
    message: "What are the instructions for the user?",
  },
  {
    name: "credits",
    type: "input",
    message:
      "Did you collaborate with anyone on this project? If so, please list their names and GitHub profiles here.",
  },
  {
    name: "testing",
    type: "input",
    message: "What are some of examples of tests to run on your app?",
  },
  {
    name: "license",
    type: "list",
    message: "What license would you like your application to have?",
    choices: ["None", "Apache_2.0-blue", "GPLv3-blue", "MIT-yellow"],
  },
  {
    name: "github",
    type: "input",
    message: "What is your GitHub username?",
  },
  {
    name: "email",
    type: "input",
    message: "What is your email address?",
  },
];

// function that writes the README file.
writeToFile = (fileName, data) => {
  const filePath = path.join(process.cwd(), fileName);
  fs.writeFileSync(fileName, data);
};

// function that initializes the app.
function init() {
  inquirer.prompt(questions).then((answers) => {
    writeToFile("README.MD", generateMarkdown({ ...answers }));
  });
}

// calls the init function to run the app.
init();
