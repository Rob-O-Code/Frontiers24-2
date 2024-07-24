// This is the JavaScript code
// GUIDELINES:
//  1. Give every variable/const smallest scope
//  2. Grab HTML elements by tag and store in const
//  3. Put all other code inside functions

const body = document.body;
const outlineCheckbox = document.getElementById("outline-checkbox");
const hueNumfield = document.getElementById("hue-numfield");

function buttonPressed() {
    body.style.backgroundColor = "rgb(0, 127, 255)";
    // alert(`Stop pressing my buttons!`);
}

function checkboxChanged() {
    if (outlineCheckbox.checked) {
        body.style.outlineStyle = "solid";
    } else {
        body.style.outlineStyle = "none";
    }
}

function numfieldChanged() {
    let hue = parseInt(hueNumfield.value);
}