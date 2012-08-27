var pilha = [];
function adicionar(item) {
    pilha.push(item);
}
function retirar() {
     return pilha.pop();
}
function tamanho() {
     return pilha.length;
}