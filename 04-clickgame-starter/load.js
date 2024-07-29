let stores = document.getElementsByClassName("store");
let score = document.getElementById("score");

// Generate the display for each store
for (let store of stores) {
    store.onclick = () => {
        buy(store);
    }

    let widget = document.createElement("div");
    widget.className = "widget";
    store.appendChild(widget);

    fillWidget(store, widget);

    let nameTag = document.createElement("p");
    nameTag.innerHTML = `${store.getAttribute("name")}`;
    store.appendChild(nameTag);

    let priceTag = document.createElement("p");
    priceTag.innerHTML = `${store.getAttribute("cost")} points`;
    store.appendChild(priceTag);

    let reapTag = document.createElement("p");
    reapTag.innerHTML = `+${store.getAttribute("reap")} sqft`;
    store.appendChild(reapTag);

    let cooldownTag = document.createElement("p");
    cooldownTag.innerHTML = `${store.getAttribute("cooldown")}s`;
    store.appendChild(cooldownTag);

    let overlayCost = document.createElement("div");
    overlayCost.className = "overlay-cost";
    store.appendChild(overlayCost);
}
changeScore(0); // Trigger blocking out the stores by price

function fillWidget(store, widget) {
    if (store.hasAttribute("src")) {
        let img = document.createElement("img");
        if (store.hasAttribute("imgstyle")) {
            img.style = store.getAttribute("imgstyle");
        }
        img.src = store.getAttribute("src");
        widget.appendChild(img);
    }
    if (store.hasAttribute("text")) {
        let para = document.createElement("p");
        if (store.hasAttribute("textstyle")) {
            para.style = store.getAttribute("textstyle");
        }
        para.innerHTML = store.getAttribute("text");
        widget.appendChild(para);
    }

    // Copy attributes from the store to the widget
    ["reap", "cooldown", "auto", "name"].forEach((attr) => {
        widget.setAttribute(attr, store.getAttribute(attr));
    })

    // Add the cooldown tint
    let overlayStatic = document.createElement("div");
    overlayStatic.className = "overlay-static";
    widget.appendChild(overlayStatic);
    
    // Add the sliding cooldown timer
    let overlaySlide = document.createElement("div");
    overlaySlide.className = "overlay-slide";
    overlaySlide.style.animationDuration = `${store.getAttribute("cooldown")}s`;
    widget.appendChild(overlaySlide);
}
