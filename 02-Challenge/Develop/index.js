// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')


// TODO: Create an array of questions for user input
inquirer.prompt([
    {
        type: 'input',
        message: 'What would you like to name the file?',
        name: 'name',
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
    }
])
    .then((response) => {
        console.log(response.name)
        console.log(response.description)
        console.log(response.installation)
        console.log(response.usage)
        console.log(response.contribution)
        console.log(response.test)
        return response
    })
 

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}


// TODO: Create a function to initialize app
function init() {}


// Function call to initialize app
init();
