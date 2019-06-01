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

let a = document.querySelector("a")
a.addEventListener("click", clickeandoElA)
function clickeandoElA(e) {
    let div2 = document.createElement("div")
    let parrafo = document.createElement("p")
    let btnAceptar = document.createElement("button")
    let btnCancelar = document.createElement("button")
    parrafo.innerText = "¿Está seguro que quiere salir de esta página?"
    btnAceptar.innerText = "Aceptar"
    btnCancelar.innerText = "Cancelar"
    div2.classList.add("popup")
    btnAceptar.id = "yes"
    btnCancelar.id = "no"
    body.appendChild(div2)
    div2.appendChild(parrafo)
    div2.appendChild(btnAceptar)
    div2.appendChild(btnCancelar)
    btnAceptar.addEventListener("click",dijoSi)
    btnCancelar.addEventListener("click",dijoNo)
    function dijoSi() {
        location.href = a.href       
    }
    function dijoNo() {
        body.removeChild(div2)
    }

    e.preventDefault()
    console.log("¡Click del a!")
}