const redInput = document.querySelector('input[placeholder="R"]');
const greenInput = document.querySelector('input[placeholder="G"]');
const blueInput = document.querySelector('input[placeholder="B"]');
const finalColorDiv = document.querySelector('.final-color');
const saveAsHexButton = document.querySelector('#SaveAsHex');

redInput.addEventListener('input', updateFinalColor);
greenInput.addEventListener('input', updateFinalColor);
blueInput.addEventListener('input', updateFinalColor);

function updateFinalColor() {
  const redValue = redInput.value;
  const greenValue = greenInput.value;
  const blueValue = blueInput.value;
  const rgbValue = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
  finalColorDiv.style.backgroundColor = rgbValue;
  const hexValue = rgbToHex(redValue, greenValue, blueValue);
  saveAsHexButton.textContent = `Save Hex (${hexValue})`;
}

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

const Profile = document.getElementById("Profile");
Profile.addEventListener("click", function() {
  window.location.href = "https://github.com/syntaxMORG0";
});

const Source = document.getElementById("Source");
Source.addEventListener("click", function() {
  window.location.href = "https://github.com/syntaxMORG0/RGB_ColorPicker";
});

saveAsHexButton.addEventListener("click", function() {
  const redValue = redInput.value;
  const greenValue = greenInput.value;
  const blueValue = blueInput.value;
  const hexValue = rgbToHex(redValue, greenValue, blueValue);
  alert(`Hex code: (${hexValue}) You can copy it now =)`);
  console.log(`A user now have generated a color HEX-code: ${hexValue}`)
});

