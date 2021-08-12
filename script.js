const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberButton = document.querySelector("#check-number");
const outputBox = document.querySelector("#output-box");

const getValues = () => {
  console.log(dateOfBirth.value, luckyNumber.value);
};

const checkBirthDateIsLucky = () => {
  const dob = dateOfBirth.value;
  const sum = calculateSum(dob);
  if (sum && dob) {
    if (sum % luckyNumber.value === 0) {
      outputBox.innerHTML = "Your birthday is lucky 🎉";
    } else outputBox.innerHTML = "Your birthday is not lucky 🙃";
  } else outputBox.innerHTML = "Please enter both fields";
};

const calculateSum = (dob) => {
  dob = Number(dob.replaceAll("-", ""));
  let sum = 0;

  while (dob != 0) {
    sum = sum + (dob % 10);
    date = Math.trunc(dob / 10);
  }
  console.log(sum);
  return sum;
};

checkNumberButton.addEventListener("click", checkBirthDateIsLucky);
