const resposta = "darth vader";
const section = document.querySelector("section");

function Confirmar() {
    const campo = document.querySelector("input").value;
    const h3 = document.querySelector("h3");


    section.classList.add("active");
    if (resposta == campo) {
        h3.textContent = "Você acertou!!!";
        h3.classList.remove("error");
    } 
    else {
        h3.classList.add("error");
        h3.textContent = "Você errou!!!";
    }
}
function btnFecha(){
    section.classList.remove("active"); 
}


    // if (resposta == campo) {
    //     alert("Correto");
    // } else if (campo == "Darth Vader") {
    //     alert("Correto");
    // } else if (campo == "DarthVader") {
    //     alert("Escreve direito");
    // } else if (campo == "Darth vader") {
    //     alert("Correto");
    // } else if (campo == "darth Vader") {
    //     alert("Correto");
    // } else if (campo == "") {
    //     alert("Escreve algo");
    // } else {
    //     alert("Errado");
    // }