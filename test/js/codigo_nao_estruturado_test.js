module("Pilha sem estrutura");
test("Tamanho", function() {
    adicionar("item1");
    equal(tamanho(), 1);
});

test("Retirar", function() {
    adicionar("item1");
    adicionar("item2")
    equal(retirar(), "item2");
});