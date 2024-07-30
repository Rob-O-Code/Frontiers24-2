const lights = {
    "n": {"r": document.getElementById("tl-n-r"), "y": document.getElementById("tl-n-y"), "g": document.getElementById("tl-n-g")},
    "e": {"r": document.getElementById("tl-e-r"), "y": document.getElementById("tl-e-y"), "g": document.getElementById("tl-e-g")},
    "s": {"r": document.getElementById("tl-s-r"), "y": document.getElementById("tl-s-y"), "g": document.getElementById("tl-s-g")},
    "w": {"r": document.getElementById("tl-w-r"), "y": document.getElementById("tl-w-y"), "g": document.getElementById("tl-w-g")},
}

function allOff() {
    for (let dir in lights) {
        for (let color in lights[dir]) {
            lights[dir][color].classList.add("off");
        }
    }
}