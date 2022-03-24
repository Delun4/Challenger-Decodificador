var texto = document.querySelector('#input-texto');
btnCripto.addEventListener('click',criptografia);
btnDescripto.addEventListener('click',descriptografia);
btnCopiar.addEventListener('click',copiar);


function criptografia(){

	var textoCriptografado = texto.value.replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/e/gi, "enter").replace(/o/gi, "ober").replace(/u/gi, "ufat");

	var textoResultado = document.querySelector("#msg")
	textoResultado.value = textoCriptografado
	if (texto.value == "") {
	alert("Nenhum texto foi digitado")
	textoResultado.value = ''
	}
}

function descriptografia(){
	var textoDescriptografado = texto.value.replace(/ai/gi, "a").replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ober/gi, "o").replace(/ufat/gi, "u");
	var textoResultado = document.querySelector("#msg")
	textoResultado.value = textoDescriptografado
	if (texto.value == "") {
	alert("Nenhum texto foi digitado")
	textoResultado.value = ''
	}
}

function copiar(){
	var textoResultado = document.querySelector("#msg")
	navigator.clipboard.writeText(textoResultado.value)
	if (textoResultado.value == ""){
		alert("Nenhum texto para copiar")
	}else {
	alert("Texto copiado para a area de transferencia")
	}
}