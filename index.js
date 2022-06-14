const names = [];
const thankyou = [];

function writeCards(names, event) {
  for (let i = 0; i < names.length; i++) {
    thankyou[i] = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
  }
  return thankyou;
};


function countDown(integer) {
  while (integer >= 0) {
    console.log(integer--);
  }
}