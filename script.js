function myFunc() {
  let a = prompt("Input the message to be verified: ");
  if ((a.indexOf("FR") || (a.indexOf("FR") && a.indexOf("AI"))) >= 0) {
    document.getElementById("result").innerHTML = 'The message "' + a + '" is legitimate!';
  }else if ((a.indexOf("AI") || a.indexOf("Ai") || a.indexOf("aI")) >= 0)  {
    document.getElementById("result").innerHTML = 'The message "' + a + '" is fake!';
  }else{
    document.getElementById("result").innerHTML = 'The message "' + a + '" is not yet encoded!';
}
