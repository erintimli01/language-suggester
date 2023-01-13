function hideResults() {
  document.getElementsByName('ranger').setAttribute("class", "hidden");
  document.getElementsByName('dogs').setAttribute("class", "hidden");
  document.getElementsByName('football').setAttribute("class", "hidden");
  document.getElementsByName('woods').setAttribute("class", "hidden");
  document.getElementsByName('spaghetti').setAttribute("class", "hidden");
}

window.onload = function() {
  hideResults();

document.querySelector("form").onsubmit = function(event) {
  event.preventDefault();
  hideResults();

if (ranger && dogs && football && woods && spaghetti)
}
  };