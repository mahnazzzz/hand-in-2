var jokes = [
    "A day without sunshine is like, night.",
    "At what age is it appropriate to tell my dog that he's adopted?",
    "I intend to live forever, or die trying"
  ];
  
  _addJoke = (joke) =>{
      jokes.push(joke);
  }

  _getRandomJoke =()=>{
      return jokes[Math.floor(Math.random()*jokes.length)]
  }
  module.exports = {
    allJokes : jokes,
    getRandomJoke : _getRandomJoke,
    addJoke : _addJoke
  }
  