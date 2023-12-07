import readlineSync from 'readline-sync'

const welcomeMessage = () => {
  console.log('Welcome to the Brain Games!')
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!`)
  return name
}

const generateQuestion = () => {
  const random = Math.floor(Math.random() * 10)
  console.log(`Question: ${random}`)
  return random
}

export const isCorrect = (num) => {
  if (num % 2 === 0) {
    return 'yes'
  }
  return 'no'
}

const gameLogic = () => {
  const name = welcomeMessage()
  console.log('Answer "yes" if the number is even, otherwise answer "no".')

  for (let i = 1; i <= 3; i++) {
    const value = generateQuestion()
    const answer = readlineSync.question('Your answer: ')
    const correctAnswer = isCorrect(value)

    if (answer === correctAnswer) {
      console.log('Correct!')
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.
            Let's try again ${name}`)
    }
  }
  console.log(`Congratulations, Bill!`)
}

export default gameLogic
