function novaAppLista() {
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
}

var appLista = novaAppLista();