// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown'); // Import generateMarkdown.js file

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'Enter your project title:',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a project description:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Enter installation instructions:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Enter usage information:',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Enter contribution guidelines:',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Enter test instructions:',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license for your application:',
      choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'No License'],
    },
    {
      type: 'input',
      name: 'username',
      message: 'Enter your GitHub username:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address:',
    },
  ];
  
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log(`${fileName} has been generated successfully.`);
      }
    });
  }

// TODO: Create a function to initialize app
function init() {
    inquirer
      .prompt(questions)
      .then((answers) => {
        const generatedReadme = generateMarkdown(answers); // Use the generateMarkdown function to generate README content
        writeToFile('README.md', generatedReadme);
      })
      .catch((error) => console.error(error));
  }
  

// Function call to initialize app
init();
