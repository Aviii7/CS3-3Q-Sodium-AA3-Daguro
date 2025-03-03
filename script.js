function myFunc() {
  let a = prompt("Input the message to be verified: ");
  if ((a.indexOf("FR") !== -1 && a.indexOf("AI") !== -1) || a.indexOf("FR") !== -1) {
    document.getElementById("result").innerHTML = 'The message "' + a + '" is legitimate!';
  }
  else if (a.indexOf("AI") !== -1) {
    document.getElementById("result").innerHTML = 'The message "' + a + '" is fake!';
  }
  else if (a.indexOf("aI") !== -1 || a.indexOf("Ai") !== -1) {
    document.getElementById("result").innerHTML = 'The message "' + a + '" is fake!';
  }
  else {
    document.getElementById("result").innerHTML = 'The message "' + a + '" is not yet encoded!';
  }
}

