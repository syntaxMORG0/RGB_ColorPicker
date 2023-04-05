const redInput = document.querySelector('input[placeholder="R"]');
const greenInput = document.querySelector('input[placeholder="G"]');
const blueInput = document.querySelector('input[placeholder="B"]');
const finalColorDiv = document.querySelector('.final-color');

redInput.addEventListener('input', updateFinalColor);
greenInput.addEventListener('input', updateFinalColor);
blueInput.addEventListener('input', updateFinalColor);

function updateFinalColor() {
  const redValue = redInput.value;
  const greenValue = greenInput.value;
  const blueValue = blueInput.value;
  const rgbValue = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
  finalColorDiv.style.backgroundColor = rgbValue;
}

const Profile = document.getElementById("Profile");
Profile.addEventListener("click", function() {
  window.location.href = "https://github.com/syntaxMORG0";
});

const Source = document.getElementById("Source");
Source.addEventListener("click", function() {
  window.location.href = "https://github.com/syntaxMORG0/RGB_ColorPicker";
});

