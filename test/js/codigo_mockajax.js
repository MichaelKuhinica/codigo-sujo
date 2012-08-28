function atualizaSaldo(id){
	$.getJSON('/impressjs/test/html/dados_mockajax.json?id='+id, function(response) {
		if ( response.status == 'valido') {
			$('#saldo').html( 'Saldo: ' + response.saldo );
		} else {
			$('#saldo').html( 'Conta inválida' );
		}
	});
}
