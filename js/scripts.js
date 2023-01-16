function hideResults() {
  document.getElementsByName('ranger').setAttribute("class", "hidden");
  document.getElementsByName('dogs').setAttribute("class", "hidden");
  document.getElementsByName('football').setAttribute("class", "hidden");
  document.getElementsByName('woods').setAttribute("class", "hidden");
  document.getElementsByName('spaghetti').setAttribute("class", "hidden");
}



function handleRadio(event) {
  event.preventDefault();
  const radioSelection1 = document.querySelector("input[name='ranger']:checked").value
  const radioSelection2 = document.querySelector("input[name='dog']:checked").value
  const radioSelection3 = document.querySelector("input[name='football']:checked").value
  const radioSelection4 = document.querySelector("input[name='woods']:checked").value
  const radioSelection5 = document.querySelector("input[name='spaghetti']:checked").value
}

window.addEventListener("load", function() {
  document.getElementById("radio-form").addEventListener("submit", handleRadio);
});
  


function onclick() {
  if (document.getElementByName(ranger).checked == true) {
  result ("javascript");
} else {

}

}