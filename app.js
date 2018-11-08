/* Reloj.
	 ========================================================================== */
(function(elemento) {

	// Añadir un 0 al comienzo de la cadena sólo si tiene un caracter.
	function ceroMas(dato) {
		return (dato.toString().length === 1) ? '0' + dato : dato;
	}

	// Asignar un color al tiempo.
	function colorear(hora, minuto, segundo) {
		var r = ceroMas(hora);
		var g = ceroMas(minuto);
		var b = ceroMas(segundo);
		// TODO: establecer un apropiado contraste del texto
		elemento.parentNode.style.backgroundColor = '#' + r + g + b;
	}

	// Correr el reloj.
	function tictoc() {
		var ahora = new Date();
		var hora = ahora.getHours();
		var minuto = ahora.getMinutes();
		var segundo = ahora.getSeconds();
		// TODO: añadir una opción para el formato 12/24
		var tiempo = (hora > 12) ? ceroMas(hora - 12) : ceroMas(hora);
		tiempo += ':' + ceroMas(minuto) + ceroMas(segundo);
		// TODO: añadir una opción para mostrar am/pm
		// tiempo += (hora >= 12) ? ' pm' : ' am'
		elemento.innerHTML = tiempo;
		colorear(hora, minuto, segundo);
	}

	tictoc();
	setInterval(tictoc, 1000);

})(document.getElementById('tempo'));
