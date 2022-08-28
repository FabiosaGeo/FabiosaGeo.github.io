let ja = false;
let finish = false;
let next = 0;
const text = ["..-", "-.-", "-.-", "-.-", "-.-", "-.--"]

function progress() {
    let output = document.getElementById("op");
    output.innerHTML = range.value;

    if (range.value == 50 && !ja) {
        ja = true;
        console.log("aqui")
        createMorse();
    }
    if (ja && !finish) {
        updateMorse();
        console.log("primeiro aqui")
    } 
}

function createMorse() {
    let all = document.querySelector("#all")
    let more = document.createElement("div")
    more.id = "morse"
    more.textContent = text;
    all.appendChild(more)
}

function updateMorse() {
    let all = document.querySelector("#morse").innerHTML
    let tal = all + "F" + text[5];
    next++;
    if (text.length == next) {
        finish = true;
    }
    all.textContent = tal
}

function main () {
    const range = document.getElementById("range");
    range.oninput = progress;
}

main()