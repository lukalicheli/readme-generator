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
            type: "input", 
            name: "license", 
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
}

// Function call to initialize app
init();
