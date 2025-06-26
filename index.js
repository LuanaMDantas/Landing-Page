var setaDireita = window.document.getElementById("setaDireita")
var leo = window.document.getElementById("leo")
var samantha = window.document.getElementById("samantha")
var bruna = window.document.getElementById("bruna")
var setaEsquerda = window.document.getElementById("setaEsquerda")


function RolarParaDireita() {
    leo.style ="display:none"
    bruna.style ="display:flex"
    setaDireita.style ="display:none"
    setaEsquerda.style ="display:flex; margin-top:60px"
}

function RolarParaEsquerda() {
    leo.style ="display:flex"
    bruna.style ="diplay:none"
    setaDireita.style ="displayflex; margin-top:60px"
    setaEsquerda.style ="display:none"
}