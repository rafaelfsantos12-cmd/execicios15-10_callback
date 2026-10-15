function mostrarBoasVindas() {
    console.log("Bem-vindo!");
}

function mostrarDespedida() {
    console.log("Até logo!");
}

function executarMensagem(callback) {
    callback();
}

executarMensagem(mostrarBoasVindas);
executarMensagem(mostrarDespedida);