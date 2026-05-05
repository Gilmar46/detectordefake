function verificar() {
const texto = document.getElementById('textInput').value;

let resultado = "Possível Fake News";
let explicacao = "Texto não analisado com IA ainda.";

if(texto.toLowerCase().includes("urgente")) {
explicacao = "Contém linguagem alarmista.";
}

document.getElementById('resultado').innerText = resultado + " - " + explicacao;
}
