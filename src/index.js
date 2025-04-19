#!/usr/bin/env node
const inquirer = require("@inquirer/prompts");
const { scrambleWord, isCorrect } = require("./scramble");

const words = ["javascript", "programming", "computer", "algorithm", "developer"];
const ROUNDS = 5;

async function main() {
  // Welcome and get player name
  console.log("Welcome to Word Scramble!");
  const name = await inquirer.input({ message: "What's your name?" });
  console.log(`Hi ${name}! Let's begin. You'll get ${ROUNDS} words to unscramble.`);
  
  let score = 0;
  
  // Game loop
  for (let round = 1; round <= ROUNDS; round++) {
    console.log(`\nRound ${round} of ${ROUNDS}`);
    
    // Pick a random word and scramble it
    const word = words[Math.floor(Math.random() * words.length)];
    const scrambled = scrambleWord(word);
    
    console.log(`Unscramble this word: ${scrambled}`);
    
    // Get player's guess
    const guess = await inquirer.input({ message: "Your guess:" });
    
    // Check if correct
    if (isCorrect(word, guess)) {
      console.log("Correct! 🎉");
      score++;
    } else {
      console.log(`Sorry, the word was "${word}"`);
    }
  }
  
  // Show final score
  console.log(`\nGame Over! Final score: ${score}/${ROUNDS}`);
  if (score === ROUNDS) {
    console.log("Perfect score! You're amazing! 🏆");
  } else if (score >= ROUNDS / 2) {
    console.log("Well done! 👏");
  } else {
    console.log("Keep practicing! 💪");
  }
}

main();
