const fs = require('fs');
import { getAllWords } from './fileWordCount';

const fileName = process.argv[2];

fs.readFile(fileName, 'utf8', (err: Error, data: string) => {
  if (err) {
    console.log(err);
  } else {
    writeToFile('result.txt', getAllWords(data));
  }
});

const writeToFile = (fileName: string, data: string[]): void => {
  fs.writeFile(fileName, data.join('\n'), err => {
    if (err) {
      console.log(err);
    }
    else {
      console.log('El resultado se encuentra en result.txt');
    }
  });
};
