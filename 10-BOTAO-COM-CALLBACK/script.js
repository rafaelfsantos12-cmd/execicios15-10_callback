javascript
function confirmarAcao() {
    document.getElementById("mensagem").textContent = "Ação confirmada!";
}

document.getElementById("botao").addEventListener("click", confirmarAcao);
