const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberButton = document.querySelector("#check-number");
const outputBox = document.querySelector("#output-box");

const getValues = () => {
  console.log(dateOfBirth.value, luckyNumber.value);
};

const compareValues = (sum, luckyNumber) => {
  if (sum % luckyNumber.value === 0) {
    outputBox.innerText = "Your birthday is lucky!! 🥳";
  } else {
    outputBox.innerText = "Your birthday is not lucky";
  }
};
const checkBirthDateIsLucky = () => {
  const dob = dateOfBirth.value;
  const sum = calculateSum(dob);
  compareValues(sum, luckyNumber);
};

const calculateSum = (dob) => {
  dob = dob.replaceAll("-", "");
  let sum = 0;
  for (let index = 0; index < dob.length; index++) {
    sum = sum + Number(dob.charAt(index));
  }
  return sum;
};

checkNumberButton.addEventListener("click", checkBirthDateIsLucky);
