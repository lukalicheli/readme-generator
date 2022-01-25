// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// TODO: import the generateMarkdown function from utils/generateMarkdown.js
const generateMarkdown = require("./utils/generateMarkdown.js");
// TODO: Create a function to initialize app
const init = () => {
    return inquirer.prompt([
        {
            type: "input", 
            name: "title", 
            message: "Enter title of your project:", 
        },
        {
            type: "list", 
            name: "license", 
            choices: ["MIT"],
            message: "What license is this application covered under?", 
        },
        {
            type: "input", 
            name: "description", 
            message: "Enter a brief description of your project:", 
        },
        {
            type: "input", 
            name: "installation", 
            message: "What are the instructions to install this project?", 
        },
        {
            type: "input", 
            name: "usage", 
            message: "Enter the usage information for this project:", 
        },
        {
            type: "input", 
            name: "contributing", 
            message: "What are the contribution guidelines for this project?", 
        },
        {
            type: "input", 
            name: "tests", 
            message: "What are the test instructions for this project?", 
        },
        {
            type: "input", 
            name: "github", 
            message: "Enter your GitHub URL:", 
        },
        {
            type: "input", 
            name: "email", 
            message: "Enter your email address:", 
        }
    ])
};

// Writefile function
const writeFile = data => {
    fs.writeFile("README.md", data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("README.md has been created!")
        }
    })
};


// Function call to initialize app
init().then(answers => {
    return generateMarkdown(answers);
})
.then(data => {
    return writeFile(data);
})
.catch(err => {
    console.log(err);
})


