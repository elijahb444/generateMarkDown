// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')

console.log("Welcome to Elijah's README generator! :)")


// TODO: Create an array of questions for user input
inquirer.prompt([
    {
        type: 'input',
        message: 'What would you like to name the file?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please enter a description:',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Please enter installation instructions: ',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Please enter usage information: ',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Please enter contribution guidelines: ',
        name: 'contribution'
    },
    {
        type: 'input',
        message: 'Please enter test instructions: ',
        name: 'test'
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github'
    },
    {
        type: 'list',
        message: 'Please choose a license for your README:',
        name: 'license',
        choices: ['License 1', 'License 2', 'License 3', 'License 4', 'License 5']
    }
])
    .then((response) => 
    fs.writeFile('generation.md', `# ${response.title}

## Table of Contents
    - [Description](#description)


## Description
    ${response.description}

### Installation
    ${response.installation}

### Usage
    ${response.usage}

### Contributing
    ${response.contribution}

### Testing Instructions
    ${response.test}

### Questions?
    [Gitub](github.com/${response.github})

`, err => err ? console.error('Document loading failed.') : console.log('Document created successfully!')))
 

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}


// TODO: Create a function to initialize app
function init() {}


// Function call to initialize app
init();
