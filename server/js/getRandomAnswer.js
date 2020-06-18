import answers from '../../data/data'

const getRandomAnswer = () => {
  let randomInt = Math.floor(Math.random() * (answers.length)) + 1
  return answers.find(element => element.id === randomInt)
}

export default getRandomAnswer