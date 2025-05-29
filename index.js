var card1 = window.document.getElementById ("card1")
var card2 = window.document.getElementById ("card2")
var card3 = window.document.getElementById ("card3")
var setadireita = window.document.getElementById ("setadireita")
var setaesquerda = window.document.getElementById ("setaesquerda")

function RolarDireita() {
 card1.style = "display:none"
 card3.style = "display:flex"
 setadireita.style ="display:none"
 setaesquerda.style ="display:flex; margin-top:65px"
}

function RolarEsquerda() {
 card1.style = "display:flex"
 card3.style = "display:none"
 setadireita.style ="display:flex; margin-top:65px"
 setaesquerda.style ="display:none"
}
