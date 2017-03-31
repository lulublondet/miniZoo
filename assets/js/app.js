
var select = document.getElementById('select');
var imagens = document.querySelectorAll('.animal');

select.addEventListener('change',changeColor);

function changeColor() {

	if (select.value == 'original') {
	    imagens.forEach(function(e){
 		e.classList.remove('sepia','blanco-negro','invertir-colores');
 			})
		}
	else if (select.value == 'sepia'){
		imagens.forEach(function(e){
		e.classList.remove('blanco-negro','invertir-colores');
		e.classList.add('sepia');
			})
		}	

	else if (select.value=='blanco-negro'){
		imagens.forEach(function(e){
		e.classList.remove('sepia','invertir-colores');
		e.classList.add('blanco-negro');
			})
		}

	else {
			imagens.forEach(function(e){
			e.classList.remove('blanco-negro','sepia');
			e.classList.add('invertir-colores');
			})
		}
}	









