const sentence = 'Esta es una frase de prueba, que tiene 10 palabras aaaaaaa';

function wordsCount(): number {
  const sentenceArray = sentence.split(' ');
  return sentenceArray.length;
}

function asCount(): number {
  const count = sentence.match(/a/g);
  if (count != null) {
    return count.length;
  } else {
    return 0;
  }
}

console.log(`The sentence '${sentence}' has ${wordsCount()} words`);
console.log(`The sentence '${sentence}' has ${asCount()} a's`);
