function hideResultsAndError(){
  document.getElementsByName("ranger");
  document.getElementsByName("dogs");
  document.getElementsByName("football");
  document.getElementsByName("woods");
  document.getElementsByName("spaghetti")
}
window.onload = funtion () {
  hideResultsAndError();
    
document.querySelector("form").onsubmit = function (event) {
  event.preventDefault();
  hideResultsAndError();
  
}
}