// var readlineSync = require('readline-sync');
import readlineSync from 'readline-sync'

const promptUser = () => {
  console.log("Welcome to the Brain Games!");
  const answer = readlineSync.question('May I have your name?');
  if (answer) {
    console.log(`Hello, ${answer}!`)
  }
}

export default promptUser;