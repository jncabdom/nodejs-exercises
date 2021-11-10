const fs = require('fs');

const fileName = process.argv[2];

fs.readFile(fileName, 'utf8', (err: Error, data: string) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data.replace(/\n/g, ' ')
      .replace(/[&\/\\#,+()$~%.`'":*?<>{}]/g, ' ')
      .replace(/  +/g, ' ')
      .trim()
      .split(' ').length);
  }
});

