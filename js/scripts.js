function handleRadio(event) {
  event.preventDefault();
  
  document.getElementById('javascript').setAttribute("class", "hidden");
  document.getElementById('ruby').setAttribute("class", "hidden");
  document.getElementById('c#').setAttribute("class", "hidden");
  
  const radioSelection1 = document.querySelector("input[name='ranger']:checked").value
  const radioSelection2 = document.querySelector("input[name='dogs']:checked").value
  const radioSelection3 = document.querySelector("input[name='football']:checked").value
  const radioSelection4 = document.querySelector("input[name='woods']:checked").value
  const radioSelection5 = document.querySelector("input[name='spaghetti']:checked").value
  const summedFormValues = parseInt(radioSelection1) + parseInt(radioSelection2) + parseInt(radioSelection3) + parseInt(radioSelection4) + parseInt(radioSelection5);

  if (summedFormValues <2) {
    document.getElementById('javascript').removeAttribute("class");
  } else if (summedFormValues >=2 && summedFormValues <4) {
    document.getElementById("ruby").removeAttribute("class");
  } else {
    document.getElementById("c#").removeAttribute("class");
  }
}

window.addEventListener("load", function() {
  document.getElementById("radio-form").addEventListener("submit", handleRadio);
});