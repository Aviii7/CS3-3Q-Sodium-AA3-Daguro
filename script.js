function myFunc() {
  let a = prompt("Input the message to be verified: ");
  let upperA = a.toUpperCase();
  if (upperA.indexOf("FR") !== -1 && upperA.indexOf("AI") !== -1) {
    document.getElementById("result").innerHTML = 'The message "' + a + '" is legitimate!';
  }
  else if (upperA.indexOf("AI") !== -1) {
    document.getElementById("result").innerHTML = 'The message "' + a + '" is fake!';
  }
  else {
    document.getElementById("result").innerHTML = 'The message "' + a + '" is not yet encoded!';
  }
}

