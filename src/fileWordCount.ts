const fs = require('fs');

const fileName = process.argv[2];

fs.readFile(fileName, 'utf8', (err: Error, data: string) => {
  if (err) {
    console.log(err);
  } else {
    console.log(getAllWords(data).length);
  }
});

export const getAllWords = (data: string): string[] => {
  return data.replace(/\n/g, ' ')
    .replace(/[&\/\\#,+()$~%.`'":*?<>{}]/g, ' ')
    .replace(/  +/g, ' ')
    .trim()
    .split(' ');
};
