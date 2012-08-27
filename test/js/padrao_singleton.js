var appLista = (function() {
    var pilha = [];
    return {
        adicionar: function (item) {
            pilha.push(item);
        },
        retirar: function() {
            return pilha.pop();
        },
        tamanho: function() {
            return pilha.length;
        }
    };
}());