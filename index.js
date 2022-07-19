// const names = [];
// const thankyou = [];

// function writeCards(names, event) {
//   for (let i = 0; i < names.length; i++) {
//     thankyou[i] = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
//   }
//   return thankyou;
// };


// function countDown(integer) {
//   while (integer >= 0) {
//     console.log(integer--);
//   }
// }

// const writeCards = (names, event) => {
//   const thank_you = []
//   for (let i = 0; i < names.length; i++) {
//     thank_you[i] = ` Thank you, ${names[i]}, for the wonderful ${event} gift!`;
//   }
//   return thank_you;
// }

const writeCards = (names, event) => {
  const thank_you = [];
  for (let i = 0; i < names.length; i++) {
    thank_you.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  };
  return thank_you;
}

const countDown = int => {
  let i = int;
  while (i >= 0) {
    console.log(i);
    i--;
  };
}