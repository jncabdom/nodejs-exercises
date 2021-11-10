const sentence = 'Esta es una frase de prueba, que tiene 10 palabras';

function wordsCount(): number {
  const sentenceArray = sentence.split(' ');
  return sentenceArray.length;
}

console.log(`The sentence '${sentence}' has ${wordsCount()} words`);