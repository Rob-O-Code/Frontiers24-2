let gyroButton = document.getElementById("gyro-button");
gyroButton.onclick = function (e) {
    e.preventDefault();

    // Request permission for iOS 13+ devices
    if (
        DeviceMotionEvent &&
        typeof DeviceMotionEvent.requestPermission === "function"
    ) {
        DeviceMotionEvent.requestPermission();
    }

    // window.addEventListener("devicemotion", handleMotion);
    window.addEventListener("deviceorientation", handleOrientation);
};

function handleOrientation(event) {
    if (event.beta === null) return;
    let vel = event.beta;
    vel = vel / Math.sqrt(Math.abs(vel));
    paddleL.vy = vel;
}