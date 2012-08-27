module("Pilha com Contrutor");
test("Retirar", function() {
    var appLista = novaAppLista();
    appLista.adicionar("item1");
    appLista.adicionar("item2")
    equal(appLista.retirar(), "item2");
});

test("Tamanho", function() {
    var appLista = novaAppLista();
    appLista.adicionar("item1");
    equal(appLista.tamanho(), 1);
});