const lights = {
    "n": {"r": document.getElementById("tl-n-r"), "y": document.getElementById("tl-n-y"), "g": document.getElementById("tl-n-g")},
    "e": {"r": document.getElementById("tl-e-r"), "y": document.getElementById("tl-e-y"), "g": document.getElementById("tl-e-g")},
    "s": {"r": document.getElementById("tl-s-r"), "y": document.getElementById("tl-s-y"), "g": document.getElementById("tl-s-g")},
    "w": {"r": document.getElementById("tl-w-r"), "y": document.getElementById("tl-w-y"), "g": document.getElementById("tl-w-g")},
}

const STATE = {OFF: 0, NS_GO: 1, NS_SLOW: 2, NS_STOP: 3, EW_GO: 4, EW_SLOW: 5, EW_STOP: 6}
let state = STATE.OFF;

function nextStep() {
    switch (state) {
        case STATE.OFF:
            state = STATE.NS_GO;
            break;
        case STATE.NS_GO:
            state = nsGo();
            break;
        case STATE.NS_SLOW:
            state = nsSlow();
            break;
        case STATE.NS_STOP:
            state = nsStop();
            break;
        default:
            state = STATE.OFF;
            break;
    }
}

function nsGo() {
    allOff();
    lights['n']['g'].classList.remove("off");
    lights['s']['g'].classList.remove("off");
    lights['e']['r'].classList.remove("off");
    lights['w']['r'].classList.remove("off");
    return STATE.NS_SLOW;
}

function nsSlow() {
    allOff();
    lights['n']['y'].classList.remove("off");
    lights['s']['y'].classList.remove("off");
    lights['e']['r'].classList.remove("off");
    lights['w']['r'].classList.remove("off");
    return STATE.NS_STOP;
}

function allOff() {
    for (let dir in lights) {
        for (let color in lights[dir]) {
            lights[dir][color].classList.add("off");
        }
    }
}