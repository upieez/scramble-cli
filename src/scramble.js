/**
 * Returns a new string with the characters of `word` shuffled.
 * Example: "hello" → "lohel" (any permutation except identical)
 * @param {string} word
 * @returns {string}
 */
function scrambleWord(word) {
  // Convert string to array for shuffling
  const chars = word.split('');
  
  // Fisher-Yates shuffle algorithm
  for (let i = chars.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [chars[i], chars[j]] = [chars[j], chars[i]];
  }
  
  // Convert back to string
  const scrambled = chars.join('');
  
  // If we accidentally got the same word, try again
  return scrambled === word ? scrambleWord(word) : scrambled;
}

/**
 * Checks if `guess` matches the original `word` (case‑insensitive).
 * @param {string} word
 * @param {string} guess
 * @returns {boolean}
 */
function isCorrect(word, guess) {
  return word.toLowerCase().trim() === guess.toLowerCase().trim();
}

module.exports = { scrambleWord, isCorrect };