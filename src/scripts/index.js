import "../styles/index.scss";
let randomNumber;
(function() {
  randomNumber = getRandomNumber(10);
  console.log(randomNumber);
  console.log(`Random on init ${randomNumber}`);

  const input = document.getElementById("checkField");
  const checkBtn = document.getElementById("checkBtn");

  checkBtn.addEventListener("click", () => {
    checkNumber(input, randomNumber);
  });
})();

function checkNumber(input, number) {
  if (input.value == "") {
    console.log("I don't have value");
    alert("Please add number");
  } else {
    checkValues(input, number);
  }
  // console.log(value);
  // console.log(number);
}

function checkValues(input, number) {
  const p = document.getElementById("status");
  if (input.value > number) {
    p.innerHTML = "Your number is greater than Random Number!";
    p.className = "wrong";
  } else if (input.value < number) {
    p.innerHTML = "Your number is less than Random Number!";
    p.className = "wrong";
  } else {
    p.innerHTML = `You won!!! I am thinking about ${number}`;
    p.className = "success";
    input.value = "";
    randomNumber = getRandomNumber(10);
    console.log(`New random number${randomNumber}`);
  }
}
function getRandomNumber(n) {
  return Math.floor(Math.random() * n + 1);
}
