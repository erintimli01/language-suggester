function hideResults() {
  document.getElementsByName('ranger').setAttribute("class", "hidden");
  document.getElementsByName('dogs').setAttribute("class", "hidden");
  document.getElementsByName('football').setAttribute("class", "hidden");
  document.getElementsByName('woods').setAttribute("class", "hidden");
  document.getElementsByName('spaghetti').setAttribute("class", "hidden");
}

window.onload = function() {
document.querySelector("form").onsubmit = function(event) {
  event.preventDefault();
  hideResults();
  const ranger = document.getElementByName("ranger").value;
  const dog = document.getElementByName("dog").value;
  const football = document.getElementByName("ranger").value;
  const woods = document.getElementByName("woods").value;
  const spaghetti = document.getElementByName("spaghetti").value; 
 };
};

if (document.getElementByName(ranger).checked) {
  
}

}