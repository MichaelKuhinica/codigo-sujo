module("Pilha com Singleton");
test("Tamanho", function() {
    appLista.adicionar("item1");
    equal(appLista.tamanho(), 1);
});

test("Retirar", function() {
    appLista.adicionar("item1");
    appLista.adicionar("item2")
    equal(appLista.retirar(), "item2");
});