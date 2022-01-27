function isNumberKey(evt) {
	var charCode = (evt.which) ? evt.which : evt.keyCode;
	
	if ((charCode >= 48 && charCode <= 57) || charCode <= 31) {
		return true;
	}
	
	return false;
}

const senha = document.getElementById('senha');
const cSenha = document.getElementById('cSenha');

function valSenha(item){
	item.setCustomValiity('');
	item.checkValidity();
	
	if(item == cSenha){
		if(item.value === senha.value) item.setCustomValiity('');
		else item.setCustomValiity('As senhas são diferentes');
	}
}


