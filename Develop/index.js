// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const path = require("path");
//const userName = require(userName);

// TODO: Create an array of questions for user input

//const questions = 
//inquirer
//.prompt(
  const questions = [
  {
    type: 'input',
    name: 'userName',
    message: 'What is your name?',
  },
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
{
  type: 'input',
  message: 'Describe your project.',
  name: 'description',
  
},
{
  type: 'input',
  message: 'What installation is needed for this project?',
  name: 'installation',
},
{
  type: 'checkbox',
  message: 'Select a license.',
  name: 'license',
  choices: ["MIT", "none"],
},
{

  type: 'input',
  message: 'What dependencies were needed for this project?',
  name: 'require',
},
{
  type: 'input',
  message: 'Explain the usage of this project.',
  name: 'usage',
},
{

  type: 'input',
  message: 'Who contributed to this project? List names.',
  name: 'contributors',
},
{

  type: 'input',
  message: 'Explain what tests were ran on this project.',
  name: 'test',
},
{
  type: 'input',
  message: 'What is your github username? Ex: https://github.com/akidd15',
  name: 'github',
},
{ type: 'input',
  message: 'What is your email address?',
  name: 'email',
},
];

//.then((data) => {
  //console.log(data);
//const readme = 'README.md'

  //fs.writeFile(readme, JSON.stringify(data, null, '\t'), (err) => 
   //err ? console.log(err) : console.log('Success!')
 //)
//});


// TODO: Create a function to write README file

function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}


// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((responses) => {
  console.log("Making your readme");
  writeToFile("readme.md", generateMarkdown({...responses}));
});
}

// Function call to initialize app
init();




