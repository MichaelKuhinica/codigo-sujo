
module("Requisição ajax")
asyncTest("Mockajax do saldo válido", function() {
	expect( 1 );
	
	$('#qunit-fixture').html($('<div>').attr('id', 'saldo'));
	$.mockjax({
		url: '/impressjs/test/html/dados_mockajax.json?id=1',
		responseTime: 75,
		responseText: {
		status: 'valido',
		saldo: '400.00'
	}
	});
	
	atualizaSaldo(1);
	
	setTimeout(function() {
		equal($('#saldo').html(), 'Saldo: 400.00');
		start();
	}, 100);
});

asyncTest("Mockajax do saldo inválido", function() {
	expect( 1 );

	$('#qunit-fixture').html($('<div>').attr('id', 'saldo'));
    $.mockjax({
	  url: '/impressjs/test/html/dados_mockajax.json?id=2',
	  responseTime: 75,
	  responseText: {
	    status: 'invalido',
	    saldo: ''
	  }
	});
    
    atualizaSaldo(2);
    
    setTimeout(function() {
    	equal($('#saldo').html(), 'Conta inválida');
    	start();
    }, 100);
});
