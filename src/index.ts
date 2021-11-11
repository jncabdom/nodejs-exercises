import { RollADice } from "./rolladice";

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

// const readline = require('readline')
// const dice = readline()

readline.question(`Introduce un Dado (Los dados son: D2,D4,D6,D8,D10,D12,D20,D100)`, dice => {
  const dadito = new RollADice(dice);
  console.log(dadito);
  readline.close()
})