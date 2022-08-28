function getCodes() {

    navigator.clipboard.writeText(
        [].map.call(document.querySelectorAll("li"), function(code) {
            return code.innerHTML;
        }).join("\n")
    )
    write()
}

function write() {
    const main = document.querySelector("main")
    if (main.lastChild.nodeName.toLowerCase() !== "h2") {
        const h2 = document.createElement("h2")
        h2.innerText = "Copiado para a área de transferência!"
        main.appendChild(h2)
    }
}