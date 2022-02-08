const altura = document.body.scrollHeight - window.innerHeight;
const fondo = document.getElementById('fondo');

window.onscroll = () => {
	const anchoFondo = (window.pageYOffset / altura) * 700;
	if(anchoFondo <= 100){
		fondo.style.width = anchoFondo + '%';
	}
}

// onclick="alerta_hecho();borrarcompra();" ESTO ES LO QUE VA A LLAMAR NUESTRA FUNCION EN EL HTML
function borrarcompra(){
  
const nombre = document.GetElementById('nombre');
  nombre.value = "";
const apellido = document.getElementById('apellido');
  apellido.value = "";
const telefono = document.GetElementById('telefono');
  telefono.value = "";
const comentario = document.getElementById('comentario');
  comentario.value = "";
  
//id="nombre"
//id="apellido"
//id="telefono"
//id="comentario"

}

// onclick="alerta_hecho();borrarcontacto();" ESTO ES LO QUE VA A LLAMAR NUESTRA FUNCION EN EL HTML
function borrarcontacto(){
  
const Tunombre = document.GetElementById('Tunombre');
  Tunombre = "";
const Comentario = document.getElementById('Comentario');
  Comentario = "";

//id="Tunombre"
//id="Comentario"
  
}