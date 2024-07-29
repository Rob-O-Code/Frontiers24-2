const widgetContainer = document.getElementById("widget-container");
function buy(store) {
    
}

function harvest(widget) {
    // Only run if currently not harvesting
    
    // Set harvesting flag
    

    // If manual, collect points now
    if (widget.getAttribute("auto") != 'true') {
        
    }

    setTimeout(() => {
        // Remove the harvesting flag
        
        // If automatic, collect points
        if (widget.getAttribute("auto") == 'true') {
            
        }
    }, 1000);
}

function changeScore(amount) {
    score.innerHTML = 0;

    // Update the stores to block buying expensive boxes
    
}

function showPoint(widget) {
    let number = document.createElement("span");
    number.className = "point";
    number.innerHTML = "+" + widget.getAttribute("reap");
    number.style.left = "50%";
    number.style.top = "50%";
    number.onanimationend = () => {
        widget.removeChild(number);
    }
    widget.appendChild(number);
}