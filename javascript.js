var range = document.getElementById("range");
var output = document.getElementById("op");
output.innerHTML = range.value;
range.oninput = function () {
    output.innerHTML = this.value;
    if (range.value == 50) {
        var all = document.querySelector("#all")
        all.innerHTML = ""
    }
}

console.log(range.value);
