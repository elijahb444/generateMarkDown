// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')

console.log("Welcome to Elijah's README generator! :)")


// TODO: Create an array of questions for user input
inquirer.prompt([
    {
        type: 'input',
        message: 'What would you like to name your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please enter a description:',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Please enter installation instructions:',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Please enter usage information:',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Please enter contribution guidelines:',
        name: 'contribution'
    },
    {
        type: 'input',
        message: 'Please enter test instructions:',
        name: 'test'
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github'
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email'
    },
    {
        type: 'list',
        message: 'Please choose a license for your project:',
        name: 'license',
        choices: ['MIT', 'GPLv2', 'Apache', 'GPLv3', 'BSD 3-Clause']
    }
])
.then((response) => {
    const readmeContent = `
# ${response.title}

![License](https://img.shields.io/badge/license-${response.license}-blue.svg)

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Description
${response.description}

## Installation
${response.installation}

## Usage
${response.usage}

## Contributing
${response.contribution}

## Tests
${response.test}

## License
This project is licensed under the ${response.license} license.

## Questions
For any questions, please contact me:
- GitHub: [${response.github}](https://github.com/${response.github})
- Email: [${response.email}](mailto:${response.email})
    `;

    fs.writeFile('README.md', readmeContent, err => 
        err ? console.error('Document creation failed.') : console.log('Document created successfully!')
    );
});
 

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}


// TODO: Create a function to initialize app
function init() {}


// Function call to initialize app
init();
