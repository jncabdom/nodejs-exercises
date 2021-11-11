const rollDice = (max: number): number => {
  return Math.floor(Math.random() * (max) + 1);
}

console.log(rollDice(parseInt(process.argv[2])));
