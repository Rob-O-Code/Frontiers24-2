// This is the JavaScript code
// GUIDELINES:
//  1. Give every variable/const smallest scope
//  2. Grab HTML elements by tag and store in const
//  3. Put all other code inside functions

const body = document.body;
const outlineCheckbox = document.getElementById("outline-checkbox");
const hueNumfield = document.getElementById("hue-numfield");
const textField = document.getElementById("text-field");
const textOutput = document.getElementById("text-output");

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
    console.log(`the hue is ${hue}`)
    body.style.backgroundColor = `hsl(${hue}, 100%, 85%)`;
}

function textFieldChanged() {
    let name = textField.value;
    textOutput.innerHTML = `Hello, ${name.toUpperCase()}!`;
}