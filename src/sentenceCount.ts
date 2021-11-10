const sentence = 'Esta es una frase de prueba, que tiene 11 palabras aaaaaaa';

function wordsCount(sentence: string): number {
  const sentenceArray = sentence.split(' ');
  return sentenceArray.length;
}

function asCount(sentence: string): number {
  const count = sentence.match(/a/g);
  if (count != null) {
    return count.length;
  }
  return 0;
}

console.log(`The sentence '${sentence}' has ${wordsCount(sentence)} words`);
console.log(`The sentence '${sentence}' has ${asCount(sentence)} a's`);
