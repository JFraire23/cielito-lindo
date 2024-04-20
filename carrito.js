const platillosEnCarritoCielitoLindo = JSON.parse(localStorage.getItem("platillos-cielito-lindo"));
console.log(platillosEnCarritoCielitoLindo);
const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoPlatillos = document.querySelector("#carrito-platillos");
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
const contenedorCarritoComprado = document.querySelector("#carrito-comprado");
let botonesEliminar = document.querySelectorAll(".carrito-platillo-eliminar");
const botonVaciar = document.querySelector("#carrito-acciones-vaciar");
const contenedorTotal = document.querySelector("#total");


function cargarPlatillosCarrito(){

	if (platillosEnCarritoCielitoLindo && platillosEnCarritoCielitoLindo.length > 0 ) {

		contenedorCarritoVacio.classList.add("disabled");
		contenedorCarritoPlatillos.classList.remove("disabled");
		contenedorCarritoAcciones.classList.remove("disabled");
		contenedorCarritoComprado.classList.add("disabled");
		contenedorCarritoPlatillos.innerHTML = "";



		platillosEnCarritoCielitoLindo.forEach(platillo => {
			const div = document.createElement("div");
			div.classList.add("carrito-platillo");
			div.innerHTML = `

					<img class="carrito-platillo-imagen" src="${platillo.imagen}">
					<div class="carrito-platillo-titulo">
						<small>Titulo</small>
						<h5>${platillo.titulo}</h5>
					</div>
					<div class="carrito-platillo-cantidad">
						<small>Cantidad</small>
						<p class="textos-carrito">${platillo.cantidad}</p>
					</div>
					<div class="carrito-platillo-precio">
						<small>Precio</small>
						<p class="textos-carrito">$${platillo.precio}</p>
					</div>
					<div class="carrito-platillo-subtotal">
						<small>Subtotal</small>
						<p class="textos-carrito">$${platillo.precio * platillo.cantidad}</p>
					</div>
					<button class="carrito-platillo-eliminar" id="${platillo.id}"><i class="fa-regular fa-trash-can"></i></button>
				

		`;
		
		contenedorCarritoPlatillos.append(div);



		})
	
	
	}
	else {

		contenedorCarritoVacio.classList.remove("disabled");
		contenedorCarritoPlatillos.classList.add("disabled");
		contenedorCarritoAcciones.classList.add("disabled");
		contenedorCarritoComprado.classList.add("disabled");
	}

	actualizarBotonesEliminar();
	actualizarTotal();
}

cargarPlatillosCarrito();


function actualizarBotonesEliminar(){
	botonesEliminar = document.querySelectorAll(".carrito-platillo-eliminar");

	botonesEliminar.forEach(boton => {
		boton.addEventListener("click", eliminarDelCarrito);
	});
}

function eliminarDelCarrito(e){

	Toastify({
  		text: "Platillo eliminado",
  		duration: 1000,
  		close: true,
  		gravity: "top", // `top` or `bottom`
  		position: "right", // `left`, `center` or `right`
  		stopOnFocus: true, // Prevents dismissing of toast on hover
  		style: {
    		background: "linear-gradient(to right, #ff002d, pink)",
    		borderRadius: "2rem",
    		fontSize: '1rem',
  		},
  		onClick: function(){} // Callback after click
		}).showToast();

	const idBoton = e.currentTarget.id;
	const index = platillosEnCarritoCielitoLindo.findIndex(platillo => platillo.id === idBoton);

	platillosEnCarritoCielitoLindo.splice(index, 1);
	cargarPlatillosCarrito();

	localStorage.setItem("platillos-cielito-lindo", JSON.stringify(platillosEnCarritoCielitoLindo) );

}

botonVaciar.addEventListener("click", vaciarCarrito);
function vaciarCarrito(){

	Swal.fire({
 	 	title: "¿Estas Seguro?",
  		text: ` se van a borrar todos los platillos`,
  		icon: "question",
  		showCancelButton: true,
  		confirmButtonColor: "#3085d6",
  		cancelButtonColor: "#d33",
  		confirmButtonText: "Sí",
  		cancelButtonText: "Cancelar",
		}).then((result) => {
  		if (result.isConfirmed) {
  			platillosEnCarritoCielitoLindo.length = 0;
			localStorage.setItem("platillos-cielito-lindo", JSON.stringify(platillosEnCarritoCielitoLindo) );
			cargarPlatillosCarrito();
    		Swal.fire({
      		title: "Borrado",
      		text: "Todos tus poductos fueron borrados",
      		icon: "success"
    	});
  }
});

	
}

function actualizarTotal(){
	const totalCalculado = platillosEnCarritoCielitoLindo.reduce((acc, platillo)=> acc +(platillo.precio * platillo.cantidad), 0);

	total.innerText = `$${totalCalculado.toFixed(2)}`; 

}

window.onload = borrarPorTiempo();

function borrarPorTiempo(){
	let borrar = false;
	momentoActual = new Date();
	hora = momentoActual.getHours();
	minuto = momentoActual.getMinutes();
	segundo = momentoActual.getSeconds();

	str_segundo = new String (segundo);
	if (str_segundo.length == 1) {
		segundo = "0" + segundo;
	}

	str_minuto = new String (minuto);
	if (str_minuto.length == 1) {
		minuto = "0" + minuto;
	}

	str_hora = new String (hora);
	if (str_hora.length == 1) {
		hora = "0" + hora;
	}

	horaImprimible = hora + ":" + minuto + ":" + segundo;
            if(horaImprimible == "18:13:00") {
                borrar = true;
            }


    setTimeout("borrarPorTiempo()",1000);
            if(borrar == true) {//Comprueba que la hora es igual a la que quieres y actualiza
                vaciarCarrito2();
            }
	
}

function vaciarCarrito2(){
	platillosEnCarritoCielitoLindo.length = 0;
	localStorage.setItem("platillos-cielito-lindo", JSON.stringify(platillosEnCarritoCielitoLindo) );
	cargarPlatillosCarrito();
}


