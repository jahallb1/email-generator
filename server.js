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
]