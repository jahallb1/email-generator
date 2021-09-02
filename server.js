const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateEmailMarkdown = require('./utils/generateEmailMarkdown');

const questions = [
    {
        type: 'input',
        name: 'firstName',
        message: "What is the student's first name?"
    },
    {
        type: 'input',
        name: 'dateOfSession',
        message: "When is the student's session?"
    },
    {
        type: "input",
        name: "zoomLink",
        message: "What is the zoomlink for the student?"
    }
];

function writeFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

function start() {
    inquirer.prompt(questions).then((inquirerAnswers) => {
        writeFile('email.txt', generateEmailMarkdown({ ...inquirerAnswers }))
    })
}

start();