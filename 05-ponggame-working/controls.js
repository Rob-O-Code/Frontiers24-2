window.addEventListener("keydown", keyDown);
function keyDown(event) {
    const key = event.code;
    console.log(`KEYDOWN: ${key}`);
}