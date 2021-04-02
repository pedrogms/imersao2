const resposta = "DARTH VADER";
const section = document.querySelector("section");

function Confirmar() {
    const campo = document.querySelector("input").value;
    const campoM = campo.toUpperCase();
    const h3 = document.querySelector("h3");


    section.classList.add("active");
    if (resposta == campoM) {
        h3.textContent = "Você acertou!!!";
        h3.classList.remove("error");
    } 
    else {
        h3.classList.add("error");
        h3.textContent = "Você errou!!!";
    }
}

function btnFecha() {
    section.classList.remove("active");
}