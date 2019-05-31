let body = document.querySelector("body")
let btnCrear = document.querySelector("button")
btnCrear.addEventListener("click", hacerClick)
function hacerClick() {
    let div = document.createElement("div")
    body.appendChild(div)
    let p = document.createElement("p")
    p.innerText = "Lorem ipsum"
    div.appendChild(p)
    let btnBorrar = document.createElement("button")
    btnBorrar.innerText = "Borrar"
    div.appendChild(btnBorrar)
    btnBorrar.addEventListener("click", pressDelete)

    function pressDelete() {
        body.removeChild(div)
    }
}