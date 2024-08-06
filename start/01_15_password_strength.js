// Write your code here
function checkPassword(password) {
  let oneLowerCaseLetter = /(?=.+[a-z])/;
  let oneUpperCaseLetter = /(?=.+[A-Z])/;
  let oneDigit = /(?=.+[0-9])/;
  let oneSpecialCharactor = /(?=.+[!@#$%^&*])/;
  let minimumEightCharactor = /(?=.{8,})/;
  let isValid = 
    oneLowerCaseLetter.test(password) &&
    oneUpperCaseLetter.test(password) &&
    oneDigit.test(password) &&
    oneSpecialCharactor.test(password) &&
    minimumEightCharactor.test(password);

  return isValid ? "Your password is valid" : "Your password is invalid";
}

console.log(checkPassword("asf324JK34^&"));