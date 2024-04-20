//Array Principal

const platillos = [
	//HUEVOS AL GUSTO

	{
		id: "Huevos estrellados R",
		titulo: "Huevos Estrellados R", /*este titulo se va a ver en el dom*/
		titulo1: "huevos",
		titulo2: "huevos estrellados",
		titulo3: "desayuno",
		titulo4: "rojos",
		titulo5: "chilaquiles",
		imagen: "./imagenes/desayunos/imagenes-tamaño/chilaquiles-rojos.jpg", /*ruta de la imagen*/
		contenido: "2 Huevos estrellados acompañados de chilaquiles rojos dulces, frijoles refritos con queso y tortillas de maíz",
		cocina: "cielito lindo",
		categoria: {
			nombre: "HUEVOS AL GUSTO",
			id: "huevos-al-gusto"	
		},
		precio: 60
	},

	{
		id: "Huevos estrellados V",
		titulo: "Huevos Estrellados V", /*este titulo se va a ver en el dom*/
		titulo1: "huevos",
		titulo2: "huevos estrellados",
		titulo3: "desayuno",
		titulo4: "desayunos",
		titulo5: "verdes",
		imagen: "./imagenes/desayunos/imagenes-tamaño/huevos-estrellados-v.jpg", /*ruta de la imagen*/
		contenido: "2 Huevos estrellados acompañados de chilaquiles verdes, frijoles refritos con queso y tortillas de maíz",
		cocina: "cielito lindo",
		categoria: {
			nombre: "HUEVOS AL GUSTO",
			id: "huevos-al-gusto"	
		},
		precio: 60
	},
	
	{
		id: "Huevos estrellados Chi",
		titulo: "Huevos Estrellados Chi", /*este titulo se va a ver en el dom*/
		titulo1: "huevos",
		titulo2: "huevos estrellados",
		titulo3: "desayuno",
		titulo4: "desayunos",
		titulo5: "chipotle",
		imagen: "./imagenes/desayunos/imagenes-tamaño/huevos-estrellados-v.jpg", /*ruta de la imagen*/
		contenido: "2 Huevos estrellados acompañados de chilaquiles en salsa chipotle, frijoles refritos con queso y tortillas de maíz",
		cocina: "cielito lindo",
		categoria: {
			nombre: "HUEVOS AL GUSTO",
			id: "huevos-al-gusto"	
		},
		precio: 60
	},

	{
		id: "Huevos con jamon R",
		titulo: "Huevos con Jamón R", /*este titulo se va a ver en el dom*/
		titulo1: "huevos con jamon",
		titulo2: "huevos con jamón",
		titulo3: "desayuno",
		titulo4: "desayunos",
		titulo5: "rojos",
		imagen: "./imagenes/desayunos/imagenes-tamaño/huevo-jamon.jpg", /*ruta de la imagen*/
		contenido: "2 Huevos revueltos con jamón acompañados de chilaquiles rojos, frijoles refritos con queso y tortillas de maíz",
		cocina: "cielito lindo",
		categoria: {
			nombre: "HUEVOS AL GUSTO",
			id: "huevos-al-gusto"	
		},
		precio: 60
	},

	{
		id: "Huevos con jamon V",
		titulo: "Huevos con Jamón V", /*este titulo se va a ver en el dom*/
		titulo1: "huevos con jamon",
		titulo2: "huevos con jamón",
		titulo3: "desayuno",
		titulo4: "desayunos",
		titulo5: "verdes",
		imagen: "./imagenes/desayunos/imagenes-tamaño/huevo-jamon.jpg", /*ruta de la imagen*/
		contenido: "2 Huevos revueltos con jamón acompañados de chilaquiles verdes, frijoles refritos con queso y tortillas de maíz",
		cocina: "cielito lindo",
		categoria: {
			nombre: "HUEVOS AL GUSTO",
			id: "huevos-al-gusto"	
		},
		precio: 60
	},

	{
		id: "Huevos con jamon Chi",
		titulo: "Huevos con Jamón Chi", /*este titulo se va a ver en el dom*/
		titulo1: "huevos con jamon",
		titulo2: "huevos con jamón",
		titulo3: "desayuno",
		titulo4: "desayunos",
		titulo5: "chipotle",
		imagen: "./imagenes/desayunos/imagenes-tamaño/huevo-jamon.jpg", /*ruta de la imagen*/
		contenido: "2 Huevos revueltos con jamón acompañados de chilaquiles en salsa chipotle, frijoles refritos con queso y tortillas de maíz",
		cocina: "cielito lindo",
		categoria: {
			nombre: "HUEVOS AL GUSTO",
			id: "huevos-al-gusto"	
		},
		precio: 60
	},

	{
		id: "Huevos con salchicha R",
		titulo: "Huevos con Salchicha R", /*este titulo se va a ver en el dom*/
		titulo1: "huevos con salchicha",
		titulo2: "huevos",
		titulo3: "desayuno",
		titulo4: "desayunos",
		titulo5: "rojos",
		imagen: "./imagenes/desayunos/imagenes-tamaño/huevo-salchicha.jpg", /*ruta de la imagen*/
		contenido: "2 Huevos revueltos con salchicha acompañados de chilaquiles rojos, frijoles refritos con queso y tortillas de maíz",
		cocina: "cielito lindo",
		categoria: {
			nombre: "HUEVOS AL GUSTO",
			id: "huevos-al-gusto"	
		},
		precio: 60
	},

	{
		id: "Huevos con salchicha V",
		titulo: "Huevos con Salchicha V", /*este titulo se va a ver en el dom*/
		titulo1: "huevos con salchicha",
		titulo2: "huevos",
		titulo3: "desayuno",
		titulo4: "desayunos",
		titulo5: "verdes",
		imagen: "./imagenes/desayunos/imagenes-tamaño/huevo-salchicha.jpg", /*ruta de la imagen*/
		contenido: "2 Huevos revueltos con salchicha acompañados de chilaquiles verdes, frijoles refritos con queso y tortillas de maíz",
		cocina: "cielito lindo",
		categoria: {
			nombre: "HUEVOS AL GUSTO",
			id: "huevos-al-gusto"	
		},
		precio: 60
	},

	{
		id: "Huevos con salchicha Chi",
		titulo: "Huevos con Salchicha Chi", /*este titulo se va a ver en el dom*/
		titulo1: "huevos con salchicha",
		titulo2: "huevos",
		titulo3: "desayuno",
		titulo4: "desayunos",
		titulo5: "chipotle",
		imagen: "./imagenes/desayunos/imagenes-tamaño/huevo-salchicha.jpg", /*ruta de la imagen*/
		contenido: "2 Huevos revueltos con salchicha acompañados de chilaquiles en salsa chipotle, frijoles refritos con queso y tortillas de maíz",
		cocina: "cielito lindo",
		categoria: {
			nombre: "HUEVOS AL GUSTO",
			id: "huevos-al-gusto"	
		},
		precio: 60
	},

	{
		id: "Huevos con Tocino R",
		titulo: "Huevos con Tocino R", /*este titulo se va a ver en el dom*/
		titulo1: "huevos con tocino",
		titulo2: "huevos",
		titulo3: "desayuno",
		titulo4: "rojos",
		titulo5: "tocino",
		imagen: "./imagenes/desayunos/imagenes-tamaño/huevos-tocino.jpg", /*ruta de la imagen*/
		contenido: "2 Huevos revueltos con tocino acompañados de chilaquiles rojos, frijoles refritos con queso y tortillas de maíz",
		cocina: "cielito lindo",
		categoria: {
			nombre: "HUEVOS AL GUSTO",
			id: "huevos-al-gusto"	
		},
		precio: 70
	},

	{
		id: "Huevos con Tocino V",
		titulo: "Huevos con Tocino V", /*este titulo se va a ver en el dom*/
		titulo1: "huevos con tocino",
		titulo2: "huevos",
		titulo3: "desayuno",
		titulo4: "verdes",
		titulo5: "tocino",
		imagen: "./imagenes/desayunos/imagenes-tamaño/huevos-tocino.jpg", /*ruta de la imagen*/
		contenido: "2 Huevos revueltos con tocino acompañados de chilaquiles verdes, frijoles refritos con queso y tortillas de maíz",
		cocina: "cielito lindo",
		categoria: {
			nombre: "HUEVOS AL GUSTO",
			id: "huevos-al-gusto"	
		},
		precio: 70
	},

	{
		id: "Huevos con Tocino Chi",
		titulo: "Huevos con Tocino Chi", /*este titulo se va a ver en el dom*/
		titulo1: "huevos con tocino",
		titulo2: "huevos",
		titulo3: "desayuno",
		titulo4: "chipotles",
		titulo5: "tocino",
		imagen: "./imagenes/desayunos/imagenes-tamaño/huevos-tocino.jpg", /*ruta de la imagen*/
		contenido: "2 Huevos revueltos con tocino acompañados de chilaquiles rojos, frijoles refritos con queso y tortillas de maíz",
		cocina: "cielito lindo",
		categoria: {
			nombre: "HUEVOS AL GUSTO",
			id: "huevos-al-gusto"	
		},
		precio: 70
	},	

	{
		id: "Omelette R",
		titulo: "Omelette R", /*este titulo se va a ver en el dom*/
		titulo1: "omelete",
		titulo2: "omelet",
		titulo3: "desayuno",
		titulo4: "huevo",
		titulo5: "rojos",
		imagen: "./imagenes/desayunos/imagenes-tamaño/omelette.jpg", /*ruta de la imagen*/
		contenido: "Omelette acompañado de chilaquiles rojos, frijoles refritos con queso y tortillas de maíz",
		cocina: "cielito lindo",
		categoria: {
			nombre: "HUEVOS AL GUSTO",
			id: "huevos-al-gusto"	
		},
		precio: 70
	},

	{
		id: "Omelette V",
		titulo: "Omelette V", /*este titulo se va a ver en el dom*/
		titulo1: "omelete",
		titulo2: "omelet",
		titulo3: "desayuno",
		titulo4: "huevo",
		titulo5: "verdes",
		imagen: "./imagenes/desayunos/imagenes-tamaño/omelette.jpg", /*ruta de la imagen*/
		contenido: "Omelette acompañado de chilaquiles verdes, frijoles refritos con queso y tortillas de maíz",
		cocina: "cielito lindo",
		categoria: {
			nombre: "HUEVOS AL GUSTO",
			id: "huevos-al-gusto"	
		},
		precio: 70
	},

	{
		id: "Omelette Chi",
		titulo: "Omelette Chi", /*este titulo se va a ver en el dom*/
		titulo1: "omelete",
		titulo2: "omelet",
		titulo3: "desayuno",
		titulo4: "huevo",
		titulo5: "chipotle",
		imagen: "./imagenes/desayunos/imagenes-tamaño/omelette.jpg", /*ruta de la imagen*/
		contenido: "Omelette acompañado de chilaquiles en salsa chipotle, frijoles refritos con queso y tortillas de maíz",
		cocina: "cielito lindo",
		categoria: {
			nombre: "HUEVOS AL GUSTO",
			id: "huevos-al-gusto"	
		},
		precio: 70
	},

	{
		id: "En Canasta R",
		titulo: "En Canasta R", /*este titulo se va a ver en el dom*/
		titulo1: "omelete",
		titulo2: "omelet",
		titulo3: "desayuno",
		titulo4: "huevo",
		titulo5: "rojos",
		imagen: "./imagenes/desayunos/imagenes-tamaño/huevos-canasta.jpg", /*ruta de la imagen*/
		contenido: "Huevos en Canasta acompañado de chilaquiles rojos, frijoles refritos con queso y tortillas de maíz",
		cocina: "cielito lindo",
		categoria: {
			nombre: "HUEVOS AL GUSTO",
			id: "huevos-al-gusto"	
		},
		precio: 70
	},

	{
		id: "En Canasta V",
		titulo: "En Canasta V", /*este titulo se va a ver en el dom*/
		titulo1: "omelete",
		titulo2: "omelet",
		titulo3: "desayuno",
		titulo4: "huevo",
		titulo5: "verdes",
		imagen: "./imagenes/desayunos/imagenes-tamaño/huevos-canasta.jpg", /*ruta de la imagen*/
		contenido: "Huevos en Canasta acompañado de chilaquiles verdes, frijoles refritos con queso y tortillas de maíz",
		cocina: "cielito lindo",
		categoria: {
			nombre: "HUEVOS AL GUSTO",
			id: "huevos-al-gusto"	
		},
		precio: 70
	},

	{
		id: "En Canasta Chi",
		titulo: "En Canasta Chi", /*este titulo se va a ver en el dom*/
		titulo1: "omelete",
		titulo2: "omelet",
		titulo3: "desayuno",
		titulo4: "huevo",
		titulo5: "chipotle",
		imagen: "./imagenes/desayunos/imagenes-tamaño/huevos-canasta.jpg", /*ruta de la imagen*/
		contenido: "Huevos en Canasta acompañado de chilaquiles en salsa chipotle, frijoles refritos con queso y tortillas de maíz",
		cocina: "cielito lindo",
		categoria: {
			nombre: "HUEVOS AL GUSTO",
			id: "huevos-al-gusto"	
		},
		precio: 70
	},

	//CHILAQUILES
	{
		id: "Chilaquiles rojos",
		titulo: "Chilaquiles Rojos Dulces", /*este titulo se va a ver en el dom*/
		titulo1: "chilaquiles",
		titulo2: "rojos",
		titulo3: "desayuno",
		titulo4: "desayunos",
		titulo5: "dulces",
		imagen: "./imagenes/desayunos/imagenes-tamaño/chilaquiles-rojos.jpg", /*ruta de la imagen*/
		contenido: "Chilaquiles rojos dulces acompañados de arroz rojo y frijoles",
		cocina: "cielito lindo",
		categoria: {
			nombre: "CHILAQUILES",
			id: "chilaquiles"	
		},
		precio: 70
	},

	{
		id: "Chilaquiles verdes",
		titulo: "Chilaquiles Verdes", /*este titulo se va a ver en el dom*/
		titulo1: "chilaquiles",
		titulo2: "verdes",
		titulo3: "desayuno",
		titulo4: "desayunos",
		titulo5: "verde",
		imagen: "./imagenes/desayunos/imagenes-tamaño/chilaquiles-verdes.jpg", /*ruta de la imagen*/
		contenido: "Chilaquiles verdes acompañados de arroz rojo y frijoles",
		cocina: "cielito lindo",
		categoria: {
			nombre: "CHILAQUILES",
			id: "chilaquiles"	
		},
		precio: 70
	},

	{
		id: "Chilaquiles chipotles",
		titulo: "Chilaquiles Chipotles", /*este titulo se va a ver en el dom*/
		titulo1: "chilaquiles",
		titulo2: "chipotles",
		titulo3: "desayuno",
		titulo4: "desayunos",
		titulo5: "chipotles",
		imagen: "./imagenes/desayunos/imagenes-tamaño/chilaquiles-chipotle.jpg", /*ruta de la imagen*/
		contenido: "Chilaquiles en salsa Chipotle acompañados de arroz rojo y frijoles",
		cocina: "cielito lindo",
		categoria: {
			nombre: "CHILAQUILES",
			id: "chilaquiles"	
		},
		precio: 75
	},

	{
		id: "Chilaquiles cordonblue",
		titulo: "Chilaquiles CordonBlue", /*este titulo se va a ver en el dom*/
		titulo1: "chilaquiles",
		titulo2: "pollo",
		titulo3: "desayuno",
		titulo4: "desayunos",
		titulo5: "cordon",
		imagen: "./imagenes/desayunos/imagenes-tamaño/chilaquiles-cordonblue.jpeg", /*ruta de la imagen*/
		contenido: "Chilaquiles CordonBlue acompañados de arroz rojo y frijoles",
		cocina: "cielito lindo",
		categoria: {
			nombre: "CHILAQUILES",
			id: "chilaquiles"	
		},
		precio: 75
	},

	//OTROS

	{
		id: "Moyete Completo",
		titulo: "Moyete Completo", /*este titulo se va a ver en el dom*/
		titulo1: "mollete",
		titulo2: "moyete",
		titulo3: "desayuno",
		titulo4: "desayunos",
		titulo5: "queso",
		imagen: "./imagenes/desayunos/imagenes-tamaño/moyetes.jpg", /*ruta de la imagen*/
		contenido: "Moyete completo de frijoles con queso con salchicha",
		cocina: "cielito lindo",
		categoria: {
			nombre: "OTROS",
			id: "otros"	
		},
		precio: 50
	},

	{
		id: "Hot cake",
		titulo: "HotCake Mermelada", /*este titulo se va a ver en el dom*/
		titulo1: "hot",
		titulo2: "cake",
		titulo3: "desayuno",
		titulo4: "desayunos",
		titulo5: "hotcake",
		imagen: "./imagenes/desayunos/imagenes-tamaño/hotcake-mermelada.jpg", /*ruta de la imagen*/
		contenido: "2 Hot cakes con mermelada de fresa",
		cocina: "cielito lindo",
		categoria: {
			nombre: "OTROS",
			id: "otros"	
		},
		precio: 40
	},

	{
		id: "Hot cake",
		titulo: "HotCake Lechera", /*este titulo se va a ver en el dom*/
		titulo1: "hot",
		titulo2: "cake",
		titulo3: "desayuno",
		titulo4: "desayunos",
		titulo5: "hotcake",
		imagen: "./imagenes/desayunos/imagenes-tamaño/hotcake-lechera.jpg", /*ruta de la imagen*/
		contenido: "2 Hot cakes con lechera",
		cocina: "cielito lindo",
		categoria: {
			nombre: "OTROS",
			id: "otros"	
		},
		precio: 40
	},

	{
		id: "Hot cake",
		titulo: "HotCake Cajeta", /*este titulo se va a ver en el dom*/
		titulo1: "hot",
		titulo2: "cake",
		titulo3: "desayuno",
		titulo4: "desayunos",
		titulo5: "hotcake",
		imagen: "./imagenes/desayunos/imagenes-tamaño/hotcake-cajeta.jpg", /*ruta de la imagen*/
		contenido: "2 Hot cakes con cajeta",
		cocina: "cielito lindo",
		categoria: {
			nombre: "OTROS",
			id: "otros"	
		},
		precio: 40
	},

	{
		id: "Hot cake",
		titulo: "HotCake Chocolate", /*este titulo se va a ver en el dom*/
		titulo1: "hot",
		titulo2: "cake",
		titulo3: "desayuno",
		titulo4: "desayunos",
		titulo5: "hotcake",
		imagen: "./imagenes/desayunos/imagenes-tamaño/hotcake-chocolate.jpg", /*ruta de la imagen*/
		contenido: "2 Hot cakes con chocolate",
		cocina: "cielito lindo",
		categoria: {
			nombre: "OTROS",
			id: "otros"	
		},
		precio: 40
	},




	{
		id: "Cielito lindo A",
		titulo: "Cielito Lindo A", /*este titulo se va a ver en el dom*/
		titulo1: "",
		titulo2: "",
		titulo3: "desayuno",
		titulo4: "desayunos",
		titulo5: "",
		imagen: "./imagenes/desayunos/imagenes-tamaño/waffles-omelette.jpg", /*ruta de la imagen*/
		contenido: "1 waffle con miel, 2 huevos estrellados, chilaquiles rojos, frijoles refritos con queso y salchicha guisada",
		cocina: "cielito lindo",
		categoria: {
			nombre: "OTROS",
			id: "otros"	
		},
		precio: 120
	},

		{
		id: "Cielito lindo B",
		titulo: "Cielito Lindo B", /*este titulo se va a ver en el dom*/
		titulo1: "",
		titulo2: "",
		titulo3: "desayuno",
		titulo4: "desayunos",
		titulo5: "",
		imagen: "./imagenes/desayunos/imagenes-tamaño/waffles-omelette.jpg", /*ruta de la imagen*/
		contenido: "1 waffle con miel, 2 huevos estrellados, chilaquiles verdes, frijoles refritos con queso y salchicha guisada",
		cocina: "cielito lindo",
		categoria: {
			nombre: "OTROS",
			id: "otros"	
		},
		precio: 120
	},

		{
		id: "Cielito lindo C",
		titulo: "Cielito Lindo C", /*este titulo se va a ver en el dom*/
		titulo1: "",
		titulo2: "",
		titulo3: "desayuno",
		titulo4: "desayunos",
		titulo5: "",
		imagen: "./imagenes/desayunos/imagenes-tamaño/waffles-omelette.jpg", /*ruta de la imagen*/
		contenido: "1 waffle con miel, 2 huevos estrellados, chilaquiles en salsa chipotle, frijoles refritos con queso y salchicha guisada",
		cocina: "cielito lindo",
		categoria: {
			nombre: "OTROS",
			id: "otros"	
		},
		precio: 120
	},

		{
		id: "Cielito lindo D",
		titulo: "Cielito Lindo D", /*este titulo se va a ver en el dom*/
		titulo1: "",
		titulo2: "",
		titulo3: "desayuno",
		titulo4: "desayunos",
		titulo5: "",
		imagen: "./imagenes/desayunos/imagenes-tamaño/waffles-omelette.jpg", /*ruta de la imagen*/
		contenido: "1 waffle con miel, huevos con jamón, chilaquiles rojos, frijoles refritos con queso y salchicha guisada",
		cocina: "cielito lindo",
		categoria: {
			nombre: "OTROS",
			id: "otros"	
		},
		precio: 120
	},

		{
		id: "Cielito lindo E",
		titulo: "Cielito Lindo E", /*este titulo se va a ver en el dom*/
		titulo1: "",
		titulo2: "",
		titulo3: "desayuno",
		titulo4: "desayunos",
		titulo5: "",
		imagen: "./imagenes/desayunos/imagenes-tamaño/waffles-omelette.jpg", /*ruta de la imagen*/
		contenido: "1 waffle con miel, huevos con jamón, chilaquiles verdes, frijoles refritos con queso y salchicha guisada",
		cocina: "cielito lindo",
		categoria: {
			nombre: "OTROS",
			id: "otros"	
		},
		precio: 120
	},

	{
		id: "Cielito lindo F",
		titulo: "Cielito Lindo F", /*este titulo se va a ver en el dom*/
		titulo1: "",
		titulo2: "",
		titulo3: "desayuno",
		titulo4: "desayunos",
		titulo5: "",
		imagen: "./imagenes/desayunos/imagenes-tamaño/waffles-omelette.jpg", /*ruta de la imagen*/
		contenido: "1 waffle con miel, huevos con jamón, chilaquiles en salsa chipotle, frijoles refritos con queso y salchicha guisada",
		cocina: "cielito lindo",
		categoria: {
			nombre: "OTROS",
			id: "otros"	
		},
		precio: 120
	},

	{
		id: "Cielito lindo G",
		titulo: "Cielito Lindo G", /*este titulo se va a ver en el dom*/
		titulo1: "",
		titulo2: "",
		titulo3: "desayuno",
		titulo4: "desayunos",
		titulo5: "",
		imagen: "./imagenes/desayunos/imagenes-tamaño/waffles-omelette.jpg", /*ruta de la imagen*/
		contenido: "1 waffle con miel, huevos con salchicha, chilaquiles rojos, frijoles refritos con queso y salchicha guisada",
		cocina: "cielito lindo",
		categoria: {
			nombre: "OTROS",
			id: "otros"	
		},
		precio: 120
	},

	{
		id: "Cielito lindo H",
		titulo: "Cielito Lindo H", /*este titulo se va a ver en el dom*/
		titulo1: "",
		titulo2: "",
		titulo3: "desayuno",
		titulo4: "desayunos",
		titulo5: "",
		imagen: "./imagenes/desayunos/imagenes-tamaño/waffles-omelette.jpg", /*ruta de la imagen*/
		contenido: "1 waffle con miel, huevos con salchicha, chilaquiles verdes, frijoles refritos con queso y salchicha guisada",
		cocina: "cielito lindo",
		categoria: {
			nombre: "OTROS",
			id: "otros"	
		},
		precio: 120
	},

	{
		id: "Cielito lindo I",
		titulo: "Cielito Lindo I", /*este titulo se va a ver en el dom*/
		titulo1: "",
		titulo2: "",
		titulo3: "desayuno",
		titulo4: "desayunos",
		titulo5: "",
		imagen: "./imagenes/desayunos/imagenes-tamaño/waffles-omelette.jpg", /*ruta de la imagen*/
		contenido: "1 waffle con miel, huevos con salchicha, chilaquiles en salsa chipotle, frijoles refritos con queso y salchicha guisada",
		cocina: "cielito lindo",
		categoria: {
			nombre: "OTROS",
			id: "otros"	
		},
		precio: 120
	},

	{
		id: "Cielito lindo J",
		titulo: "Cielito Lindo J", /*este titulo se va a ver en el dom*/
		titulo1: "",
		titulo2: "",
		titulo3: "desayuno",
		titulo4: "desayunos",
		titulo5: "",
		imagen: "./imagenes/desayunos/imagenes-tamaño/waffles-omelette.jpg", /*ruta de la imagen*/
		contenido: "1 waffle con miel, Omelette, chilaquiles rojos, frijoles refritos con queso y salchicha guisada",
		cocina: "cielito lindo",
		categoria: {
			nombre: "OTROS",
			id: "otros"	
		},
		precio: 120
	},

	{
		id: "Cielito lindo K",
		titulo: "Cielito Lindo K", /*este titulo se va a ver en el dom*/
		titulo1: "",
		titulo2: "",
		titulo3: "desayuno",
		titulo4: "desayunos",
		titulo5: "",
		imagen: "./imagenes/desayunos/imagenes-tamaño/waffles-omelette.jpg", /*ruta de la imagen*/
		contenido: "1 waffle con miel, Omelette, chilaquiles verdes, frijoles refritos con queso y salchicha guisada",
		cocina: "cielito lindo",
		categoria: {
			nombre: "OTROS",
			id: "otros"	
		},
		precio: 120
	},

	{
		id: "Cielito lindo L",
		titulo: "Cielito Lindo L", /*este titulo se va a ver en el dom*/
		titulo1: "",
		titulo2: "",
		titulo3: "desayuno",
		titulo4: "desayunos",
		titulo5: "",
		imagen: "./imagenes/desayunos/imagenes-tamaño/waffles-omelette.jpg", /*ruta de la imagen*/
		contenido: "1 waffle con miel, Omelette, chilaquiles en salsa chipotle, frijoles refritos con queso y salchicha guisada",
		cocina: "cielito lindo",
		categoria: {
			nombre: "OTROS",
			id: "otros"	
		},
		precio: 120
	},

	{
		id: "Cielito lindo M",
		titulo: "Cielito Lindo M", /*este titulo se va a ver en el dom*/
		titulo1: "",
		titulo2: "",
		titulo3: "desayuno",
		titulo4: "desayunos",
		titulo5: "",
		imagen: "./imagenes/desayunos/imagenes-tamaño/waffles-omelette.jpg", /*ruta de la imagen*/
		contenido: "1 waffle con miel, Huevos con tocino, chilaquiles rojos, frijoles refritos con queso y salchicha guisada",
		cocina: "cielito lindo",
		categoria: {
			nombre: "OTROS",
			id: "otros"	
		},
		precio: 120
	},

	{
		id: "Cielito lindo N",
		titulo: "Cielito Lindo N", /*este titulo se va a ver en el dom*/
		titulo1: "",
		titulo2: "",
		titulo3: "desayuno",
		titulo4: "desayunos",
		titulo5: "",
		imagen: "./imagenes/desayunos/imagenes-tamaño/waffles-omelette.jpg", /*ruta de la imagen*/
		contenido: "1 waffle con miel, Huevos con tocino, chilaquiles verdes, frijoles refritos con queso y salchicha guisada",
		cocina: "cielito lindo",
		categoria: {
			nombre: "OTROS",
			id: "otros"	
		},
		precio: 120
	},

	{
		id: "Cielito lindo O",
		titulo: "Cielito Lindo O", /*este titulo se va a ver en el dom*/
		titulo1: "",
		titulo2: "",
		titulo3: "desayuno",
		titulo4: "desayunos",
		titulo5: "",
		imagen: "./imagenes/desayunos/imagenes-tamaño/waffles-omelette.jpg", /*ruta de la imagen*/
		contenido: "1 waffle con miel, Huevos con tocino, chilaquiles en salsa chipotle, frijoles refritos con queso y salchicha guisada",
		cocina: "cielito lindo",
		categoria: {
			nombre: "OTROS",
			id: "otros"	
		},
		precio: 120
	},

	{
		id: "Sincronizada",
		titulo: "Sincronizada", /*este titulo se va a ver en el dom*/
		titulo1: "queso",
		titulo2: "jamon",
		titulo3: "desayuno",
		titulo4: "desayunos",
		titulo5: "",
		imagen: "./imagenes/desayunos/imagenes-tamaño/sincronizada.jpg", /*ruta de la imagen*/
		contenido: "Quesadilla completa de harina con jamón, aguacate, queso, mayonesa y mostaza",
		cocina: "cielito lindo",
		categoria: {
			nombre: "OTROS",
			id: "otros"	
		},
		precio: 30
	},

	//WAFFLES

	{
		id: "Waffles Tradicional",
		titulo: "Waffles Tradicional", /*este titulo se va a ver en el dom*/
		titulo1: "wafles",
		titulo2: "guafles",
		titulo3: "tradicional",
		titulo4: "desayunos",
		titulo5: "",
		imagen: "./imagenes/desayunos/imagenes-tamaño/waffles-tradicional.jpg", /*ruta de la imagen*/
		contenido: "Waffle con mermelada",
		cocina: "cielito lindo",
		categoria: {
			nombre: "WAFFLES",
			id: "waffles"	
		},
		precio: 50
	},

	{
		id: "Waffles Chispas deChocolate",
		titulo: "Waffles ChispasChocolate", /*este titulo se va a ver en el dom*/
		titulo1: "wafles",
		titulo2: "guafles",
		titulo3: "chocolate",
		titulo4: "desayunos",
		titulo5: "chispas",
		imagen: "./imagenes/desayunos/imagenes-tamaño/waffles-chispas-chocolate.jpg", /*ruta de la imagen*/
		contenido: "",
		cocina: "cielito lindo",
		categoria: {
			nombre: "WAFFLES",
			id: "waffles"	
		},
		precio: 50
	},

	{
		id: "Waffles Mazapan",
		titulo: "Waffles Mazapan", /*este titulo se va a ver en el dom*/
		titulo1: "wafles",
		titulo2: "guafles",
		titulo3: "Mazapan",
		titulo4: "desayunos",
		titulo5: "masapan",
		imagen: "./imagenes/desayunos/imagenes-tamaño/waffles-mazapan.jpg", /*ruta de la imagen*/
		contenido: "",
		cocina: "cielito lindo",
		categoria: {
			nombre: "WAFFLES",
			id: "waffles"	
		},
		precio: 60
	},

	{
		id: "Waffles Cajeta Quemada",
		titulo: "Waffles Cajeta Quemada", /*este titulo se va a ver en el dom*/
		titulo1: "wafles",
		titulo2: "guafles",
		titulo3: "cajeta",
		titulo4: "desayunos",
		titulo5: "quemada",
		imagen: "./imagenes/desayunos/imagenes-tamaño/waffles-cajeta.jpg", /*ruta de la imagen*/
		contenido: "",
		cocina: "cielito lindo",
		categoria: {
			nombre: "WAFFLES",
			id: "waffles"	
		},
		precio: 60
	},

	{
		id: "Waffles Helado y Fruta",
		titulo: "Waffles Helado y Fruta", /*este titulo se va a ver en el dom*/
		titulo1: "wafles",
		titulo2: "guafles",
		titulo3: "helado",
		titulo4: "elado",
		titulo5: "fruta",
		imagen: "./imagenes/desayunos/imagenes-tamaño/waffle-fruta-y-helado.jpg", /*ruta de la imagen*/
		contenido: "fruta: platano, manzana y durazno",
		cocina: "cielito lindo",
		categoria: {
			nombre: "WAFFLES",
			id: "waffles"	
		},
		precio: 65
	},

	{
		id: "Waffles Huevo, Tocino y Queso",
		titulo: "Waffles Huevo, Tocino y Queso", /*este titulo se va a ver en el dom*/
		titulo1: "wafles",
		titulo2: "guafles",
		titulo3: "huevo",
		titulo4: "queso",
		titulo5: "tocino",
		imagen: "./imagenes/desayunos/imagenes-tamaño/waffle-tocino-queso-y-huevo.jpg", /*ruta de la imagen*/
		contenido: "",
		cocina: "cielito lindo",
		categoria: {
			nombre: "WAFFLES",
			id: "waffles"	
		},
		precio: 70
	},

	{
		id: "Waffles Crema batida y chokis",
		titulo: "Waffles Crema Batida y Chokis", /*este titulo se va a ver en el dom*/
		titulo1: "wafles",
		titulo2: "guafles",
		titulo3: "Crema",
		titulo4: "batida",
		titulo5: "chokis",
		imagen: "./imagenes/desayunos/imagenes-tamaño/waffle-crema-batida-y-chokis.jpg", /*ruta de la imagen*/
		contenido: "",
		cocina: "cielito lindo",
		categoria: {
			nombre: "WAFFLES",
			id: "waffles"	
		},
		precio: 60
	},

	{
		id: "Waffles Crema batida y fruta",
		titulo: "Waffles Crema Batida y Fruta", /*este titulo se va a ver en el dom*/
		titulo1: "wafles",
		titulo2: "guafles",
		titulo3: "Crema",
		titulo4: "batida",
		titulo5: "fruta",
		imagen: "./imagenes/desayunos/imagenes-tamaño/waffles-cremabatida-fruta.jpg", /*ruta de la imagen*/
		contenido: "fruta: platano, manzana y durazno",
		cocina: "cielito lindo",
		categoria: {
			nombre: "WAFFLES",
			id: "waffles"	
		},
		precio: 70
	},	

	{
		id: "Waffles Crema batida, chocolate y helado",
		titulo: "Waffles Cr. Batida, Choco y Helado", /*este titulo se va a ver en el dom*/
		titulo1: "wafles",
		titulo2: "guafles",
		titulo3: "Crema",
		titulo4: "batida",
		titulo5: "fruta",
		imagen: "./imagenes/desayunos/imagenes-tamaño/waffles-helado-frutaychocolate.jpg", /*ruta de la imagen*/
		contenido: "",
		cocina: "cielito lindo",
		categoria: {
			nombre: "WAFFLES",
			id: "waffles"	
		},
		precio: 70
	},

	{
		id: "Waffles omelette",
		titulo: "Waffles Omelette", /*este titulo se va a ver en el dom*/
		titulo1: "wafles",
		titulo2: "guafles",
		titulo3: "huevo",
		titulo4: "omelet",
		titulo5: "omelette",
		imagen: "./imagenes/desayunos/imagenes-tamaño/waffles-omelette.jpg", /*ruta de la imagen*/
		contenido: "",
		cocina: "cielito lindo",
		categoria: {
			nombre: "WAFFLES",
			id: "waffles"	
		},
		precio: 90
	},

	//POSTRES

	{
		id: "Galletas",
		titulo: "Galletas", /*este titulo se va a ver en el dom*/
		titulo1: "galletas",
		titulo2: "galleta",
		titulo3: "",
		titulo4: "",
		titulo5: "",
		imagen: "./imagenes/desayunos/imagenes-tamaño/galletas.jpeg", /*ruta de la imagen*/
		contenido: "",
		cocina: "cielito lindo",
		categoria: {
			nombre: "POSTRES",
			id: "postres"	
		},
		precio: 30
	},

	//CAFÉ

	{
		id: "Espresso",
		titulo: "Café Espresso", /*este titulo se va a ver en el dom*/
		titulo1: "expres",
		titulo2: "expresso",
		titulo3: "express",
		titulo4: "",
		titulo5: "",
		imagen: "./imagenes/desayunos/imagenes-tamaño/cafe-espresso.jpg", /*ruta de la imagen*/
		contenido: "",
		cocina: "cielito lindo",
		categoria: {
			nombre: "CAFÉ",
			id: "cafe"	
		},
		precio: 30
	},

	{
		id: "Café  Americano",
		titulo: "Café Americano", /*este titulo se va a ver en el dom*/
		titulo1: "americano",
		titulo2: "cafe",
		titulo3: "",
		titulo4: "",
		titulo5: "",
		imagen: "./imagenes/desayunos/imagenes-tamaño/cafe-americano.jpg", /*ruta de la imagen*/
		contenido: "",
		cocina: "cielito lindo",
		categoria: {
			nombre: "CAFÉ",
			id: "cafe"	
		},
		precio: 30
	},

	{
		id: "Cafe Vainilla",
		titulo: "Café Vainilla", /*este titulo se va a ver en el dom*/
		titulo1: "cafe",
		titulo2: "vainilla",
		titulo3: "bainillla",
		titulo4: "bainiya",
		titulo5: "",
		imagen: "./imagenes/desayunos/imagenes-tamaño/cafe-vainilla.jpg", /*ruta de la imagen*/
		contenido: "",
		cocina: "cielito lindo",
		categoria: {
			nombre: "CAFÉ",
			id: "cafe"	
		},
		precio: 40
	},

	{
		id: "Café Mocha",
		titulo: "Café Mocha", /*este titulo se va a ver en el dom*/
		titulo1: "cafe",
		titulo2: "moca",
		titulo3: "moka",
		titulo4: "",
		titulo5: "",
		imagen: "./imagenes/desayunos/imagenes-tamaño/cafe-mocha.jpg", /*ruta de la imagen*/
		contenido: "",
		cocina: "cielito lindo",
		categoria: {
			nombre: "CAFÉ",
			id: "cafe"	
		},
		precio: 40
	},

	{
		id: "Café cappucino",
		titulo: "Café Cappucino", /*este titulo se va a ver en el dom*/
		titulo1: "cafe",
		titulo2: "capuchino",
		titulo3: "",
		titulo4: "",
		titulo5: "",
		imagen: "./imagenes/desayunos/imagenes-tamaño/capuccino-regular.jpg", /*ruta de la imagen*/
		contenido: "",
		cocina: "cielito lindo",
		categoria: {
			nombre: "CAFÉ",
			id: "cafe"	
		},
		precio: 40
	},

	{
		id: "Café Caramelo",
		titulo: "Cafe Caramelo", /*este titulo se va a ver en el dom*/
		titulo1: "café",
		titulo2: "cafe",
		titulo3: "caramelo",
		titulo4: "",
		titulo5: "",
		imagen: "./imagenes/desayunos/imagenes-tamaño/cafe-caramelo.jpg", /*ruta de la imagen*/
		contenido: "",
		cocina: "cielito lindo",
		categoria: {
			nombre: "CAFÉ",
			id: "cafe"	
		},
		precio: 40
	},

	//TÉ

	{
		id: "Té Manzana",
		titulo: "Té Manzana", /*este titulo se va a ver en el dom*/
		titulo1: "manzana",
		titulo2: "te",
		titulo3: "",
		titulo4: "",
		titulo5: "",
		imagen: "./imagenes/desayunos/imagenes-tamaño/te-manzana.jpg", /*ruta de la imagen*/
		contenido: "",
		cocina: "cielito lindo",
		categoria: {
			nombre: "TÉ",
			id: "te"	
		},
		precio: 40
	},

	{
		id: "Té Chai",
		titulo: "Té Chai", /*este titulo se va a ver en el dom*/
		titulo1: "chai",
		titulo2: "te",
		titulo3: "",
		titulo4: "",
		titulo5: "",
		imagen: "./imagenes/desayunos/imagenes-tamaño/te-chai.jpg", /*ruta de la imagen*/
		contenido: "",
		cocina: "cielito lindo",
		categoria: {
			nombre: "TÉ",
			id: "te"	
		},
		precio: 40
	},

	{
		id: "Té Menta",
		titulo: "Té Menta", /*este titulo se va a ver en el dom*/
		titulo1: "menta",
		titulo2: "te",
		titulo3: "",
		titulo4: "",
		titulo5: "",
		imagen: "./imagenes/desayunos/imagenes-tamaño/te-menta.jpg", /*ruta de la imagen*/
		contenido: "",
		cocina: "cielito lindo",
		categoria: {
			nombre: "TÉ",
			id: "te"	
		},
		precio: 40
	},

	{
		id: "Té Manzana 43",
		titulo: "Té Manzana 43", /*este titulo se va a ver en el dom*/
		titulo1: "manzana",
		titulo2: "43",
		titulo3: "te",
		titulo4: "",
		titulo5: "",
		imagen: "./imagenes/desayunos/imagenes-tamaño/desayuno-ranchero-a.jpeg", /*ruta de la imagen*/
		contenido: "",
		cocina: "cielito lindo",
		categoria: {
			nombre: "TÉ",
			id: "te"	
		},
		precio: 70
	},

	//FRIAS

	{
		id: "Frias chamoy",
		titulo: "Frias Chamoy", /*este titulo se va a ver en el dom*/
		titulo1: "chamoi",
		titulo2: "chamoy",
		titulo3: "",
		titulo4: "",
		titulo5: "",
		imagen: "./imagenes/desayunos/imagenes-tamaño/frias-chamoy.jpg", /*ruta de la imagen*/
		contenido: "Bebida fría con agua mineral sabor chamoy",
		cocina: "cielito lindo",
		categoria: {
			nombre: "FRIAS",
			id: "frias"	
		},
		precio: 45
	},

	{
		id: "Frias mango, chamoy",
		titulo: "Frias Mango, Chamoy", /*este titulo se va a ver en el dom*/
		titulo1: "chamoi",
		titulo2: "chamoy",
		titulo3: "mango",
		titulo4: "",
		titulo5: "",
		imagen: "./imagenes/desayunos/imagenes-tamaño/frias-mango-chamoy.jpg", /*ruta de la imagen*/
		contenido: "Bebida fría con agua mineral sabor mango-chamoy",
		cocina: "cielito lindo",
		categoria: {
			nombre: "FRIAS",
			id: "frias"	
		},
		precio: 55
	},

	{
		id: "Frias fresa normal",
		titulo: "Frias Fresa Normal", /*este titulo se va a ver en el dom*/
		titulo1: "fresa",
		titulo2: "frias",
		titulo3: "normal",
		titulo4: "",
		titulo5: "",
		imagen: "./imagenes/desayunos/imagenes-tamaño/fresa-normal.jpg", /*ruta de la imagen*/
		contenido: "Bebida fría con agua mineral sabor fresa",
		cocina: "cielito lindo",
		categoria: {
			nombre: "FRIAS",
			id: "frias"	
		},
		precio: 65
	},

	{
		id: "Frias fresa picosa",
		titulo: "Frias Fresa Picosa", /*este titulo se va a ver en el dom*/
		titulo1: "fresa",
		titulo2: "picosa",
		titulo3: "",
		titulo4: "",
		titulo5: "",
		imagen: "./imagenes/desayunos/imagenes-tamaño/fresa-picosa.jpg", /*ruta de la imagen*/
		contenido: "Bebida fría con agua mineral sabor fresa-picosa",
		cocina: "cielito lindo",
		categoria: {
			nombre: "FRIAS",
			id: "frias"	
		},
		precio: 65
	},

	{
		id: "Frias menta mineral",
		titulo: "Frias Menta Mineral", /*este titulo se va a ver en el dom*/
		titulo1: "menta",
		titulo2: "mineral",
		titulo3: "",
		titulo4: "",
		titulo5: "",
		imagen: "./imagenes/desayunos/imagenes-tamaño/menta-mineral.jpg", /*ruta de la imagen*/
		contenido: "Bebida fría con agua mineral sabor menta",
		cocina: "cielito lindo",
		categoria: {
			nombre: "FRIAS",
			id: "frias"	
		},
		precio: 65
	},

	//FRAPPE

	{
		id: "Frappe regular",
		titulo: "Frappe Regular", /*este titulo se va a ver en el dom*/
		titulo1: "frappe",
		titulo2: "frape",
		titulo3: "regular",
		titulo4: "",
		titulo5: "",
		imagen: "./imagenes/desayunos/imagenes-tamaño/frappe-regular.jpg", /*ruta de la imagen*/
		contenido: "",
		cocina: "cielito lindo",
		categoria: {
			nombre: "FRAPPE",
			id: "frappe"	
		},
		precio: 60
	},

	{
		id: "Frappe mocha",
		titulo: "Frappe Mocha", /*este titulo se va a ver en el dom*/
		titulo1: "frappe",
		titulo2: "frape",
		titulo3: "mocha",
		titulo4: "moca",
		titulo5: "moka",
		imagen: "./imagenes/desayunos/imagenes-tamaño/frappe-mocha.jpg", /*ruta de la imagen*/
		contenido: "",
		cocina: "cielito lindo",
		categoria: {
			nombre: "FRAPPE",
			id: "frappe"	
		},
		precio: 60
	},

	{
		id: "Frappe Vainilla",
		titulo: "Frappe Vainilla", /*este titulo se va a ver en el dom*/
		titulo1: "frappe",
		titulo2: "frape",
		titulo3: "vainilla",
		titulo4: "",
		titulo5: "",
		imagen: "./imagenes/desayunos/imagenes-tamaño/frappe-vainilla.jpg", /*ruta de la imagen*/
		contenido: "",
		cocina: "cielito lindo",
		categoria: {
			nombre: "FRAPPE",
			id: "frappe"	
		},
		precio: 60
	},

	{
		id: "Frappe chokis",
		titulo: "Frappe Chokis", /*este titulo se va a ver en el dom*/
		titulo1: "frappe",
		titulo2: "frape",
		titulo3: "chokis",
		titulo4: "choquis",
		titulo5: "",
		imagen: "./imagenes/desayunos/imagenes-tamaño/frappe-chokis.jpg", /*ruta de la imagen*/
		contenido: "",
		cocina: "cielito lindo",
		categoria: {
			nombre: "FRAPPE",
			id: "frappe"	
		},
		precio: 70
	},

	{
		id: "Frappe caramelo",
		titulo: "Frappe Caramelo", /*este titulo se va a ver en el dom*/
		titulo1: "frappe",
		titulo2: "frape",
		titulo3: "caramelo",
		titulo4: "",
		titulo5: "",
		imagen: "./imagenes/desayunos/imagenes-tamaño/frappe-caramelo.jpg", /*ruta de la imagen*/
		contenido: "",
		cocina: "cielito lindo",
		categoria: {
			nombre: "FRAPPE",
			id: "frappe"	
		},
		precio: 70
	},

	{
		id: "Frappe Baileys",
		titulo: "Frappe Baileys", /*este titulo se va a ver en el dom*/
		titulo1: "frappe",
		titulo2: "frape",
		titulo3: "beylis",
		titulo4: "beilis",
		titulo5: "beilys",
		imagen: "./imagenes/desayunos/imagenes-tamaño/frappe-baileys.jpg", /*ruta de la imagen*/
		contenido: "",
		cocina: "cielito lindo",
		categoria: {
			nombre: "FRAPPE",
			id: "frappe"	
		},
		precio: 75
	},

	{
		id: "Frappe rompope",
		titulo: "Frappe Rompope", /*este titulo se va a ver en el dom*/
		titulo1: "frappe",
		titulo2: "frape",
		titulo3: "rompope",
		titulo4: "",
		titulo5: "",
		imagen: "./imagenes/desayunos/imagenes-tamaño/frappe-rompope.jpg", /*ruta de la imagen*/
		contenido: "",
		cocina: "cielito lindo",
		categoria: {
			nombre: "FRAPPE",
			id: "frappe"	
		},
		precio: 70
	},

	{
		id: "Frappe Nuez",
		titulo: "Frappe Nuez", /*este titulo se va a ver en el dom*/
		titulo1: "frappe",
		titulo2: "frape",
		titulo3: "nuez",
		titulo4: "nues",
		titulo5: "",
		imagen: "./imagenes/desayunos/imagenes-tamaño/frappe-nuez.jpg", /*ruta de la imagen*/
		contenido: "",
		cocina: "cielito lindo",
		categoria: {
			nombre: "FRAPPE",
			id: "frappe"	
		},
		precio: 70
	},

	{
		id: "Frappe oreo",
		titulo: "Frappe Oreo", /*este titulo se va a ver en el dom*/
		titulo1: "frappe",
		titulo2: "frape",
		titulo3: "oreo",
		titulo4: "galleta",
		titulo5: "",
		imagen: "./imagenes/desayunos/imagenes-tamaño/frappe-oreo.jpg", /*ruta de la imagen*/
		contenido: "",
		cocina: "cielito lindo",
		categoria: {
			nombre: "FRAPPE",
			id: "frappe"	
		},
		precio: 70
	},

	{
		id: "Frappe cajeta",
		titulo: "Frappe Cajeta", /*este titulo se va a ver en el dom*/
		titulo1: "frappe",
		titulo2: "frape",
		titulo3: "cajeta",
		titulo4: "",
		titulo5: "",
		imagen: "./imagenes/desayunos/imagenes-tamaño/frappe-cajeta.jpg", /*ruta de la imagen*/
		contenido: "",
		cocina: "cielito lindo",
		categoria: {
			nombre: "FRAPPE",
			id: "frappe"	
		},
		precio: 70
	},

	//CAFENO

	{
		id: "Cafeno Baileys",
		titulo: "Cafeno Baileys", /*este titulo se va a ver en el dom*/
		titulo1: "cafeno",
		titulo2: "beilis",
		titulo3: "beylis",
		titulo4: "beilys",
		titulo5: "",
		imagen: "./imagenes/desayunos/imagenes-tamaño/cafeno-baileys.jpg", /*ruta de la imagen*/
		contenido: "",
		cocina: "cielito lindo",
		categoria: {
			nombre: "CAFENO",
			id: "cafeno"	
		},
		precio: 75
	},

	{
		id: "Cafeno Kalua",
		titulo: "Cafeno Kalua", /*este titulo se va a ver en el dom*/
		titulo1: "cafeno",
		titulo2: "kalua",
		titulo3: "calua",
		titulo4: "",
		titulo5: "",
		imagen: "./imagenes/desayunos/imagenes-tamaño/cafeno-kalua.jpg", /*ruta de la imagen*/
		contenido: "",
		cocina: "cielito lindo",
		categoria: {
			nombre: "CAFENO",
			id: "cafeno"	
		},
		precio: 75
	},	

	{
		id: "Carajillo",
		titulo: "Carajillo", /*este titulo se va a ver en el dom*/
		titulo1: "cafeno",
		titulo2: "",
		titulo3: "",
		titulo4: "",
		titulo5: "",
		imagen: "./imagenes/desayunos/imagenes-tamaño/carajillo.jpg", /*ruta de la imagen*/
		contenido: "",
		cocina: "cielito lindo",
		categoria: {
			nombre: "CAFENO",
			id: "cafeno"	
		},
		precio: 75
	},

	{
		id: "Cafeno Vino Tinto",
		titulo: "Cafeno Vino Tinto", /*este titulo se va a ver en el dom*/
		titulo1: "cafeno",
		titulo2: "vino",
		titulo3: "tinto",
		titulo4: "",
		titulo5: "",
		imagen: "./imagenes/desayunos/imagenes-tamaño/cafeno-vino-tinto.jpg", /*ruta de la imagen*/
		contenido: "",
		cocina: "cielito lindo",
		categoria: {
			nombre: "CAFENO",
			id: "cafeno"	
		},
		precio: 75
	},

	
	

];

const contenedorImagenes = document.querySelector("#contenedor-imagenes");//imagenes=platillos
const botonesCategorias = document.querySelectorAll(".boton-clases");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".boton-agregar");
const numerito = document.querySelector("#numerito");
//let barraBusqueda = document.querySelector("#buscador");

function cargarPlatillos(platillosElegidos) {

	contenedorImagenes.innerHTML = "";

	platillosElegidos.forEach(platillo => {
		const div = document.createElement("div");
		div.classList.add("platillo");
		div.innerHTML = `


			<div class="platillo">
				<div class="platillo-detalles">
					<div class="imagen">
						<img src="${platillo.imagen}">
					</div>
					<p class="platillo-titulo">${platillo.titulo}</p>
					<div class="descripcion">
						
						<p>${platillo.contenido}</p>
						
					</div>
					
					<div class="precio">
						
						<button class="boton-precio">$${platillo.precio}</button>
					</div>

					<div class="agregar-carrito">
						<button class="boton-agregar" id="${platillo.id}">Agregar Al Carrito</button>
					</div>
					
				</div>
				
			</div>
				
		`;
		contenedorImagenes.append(div);



	})

	actualizarBotonesAgregar();

} 

/*function buscarArticulos() {
	buscador.addEventListener("input", e => {
		const inputText = e.target.value.toLowerCase().trim();
		console.log(inputText);
		
		const mostrarFiltrado = platillos.filter(platillo => 
			platillo.titulo.toLowerCase().startsWith(inputText)||
			platillo.cocina.toLowerCase().startsWith(inputText)||
			platillo.contenido.toLowerCase().startsWith(inputText)||
			platillo.titulo1.toLowerCase().startsWith(inputText)||
			platillo.titulo2.toLowerCase().startsWith(inputText)||
			platillo.titulo3.toLowerCase().startsWith(inputText)||
			platillo.titulo4.toLowerCase().startsWith(inputText)||
			platillo.titulo5.toLowerCase().startsWith(inputText)||
			platillo.precio.toString().startsWith(inputText)
			)
			;

		
		cargarPlatillos(mostrarFiltrado)
	})

}*/

cargarPlatillos(platillos);
//buscarArticulos();

botonesCategorias.forEach(boton => {
	boton.addEventListener("click", (e) => {

		botonesCategorias.forEach(boton => {
			boton.classList.remove("active")
		})
		e.currentTarget.classList.add("active");

		if (e.currentTarget.id !=  "todos") {
			const platilloCategoria = platillos.find(platillo => platillo.categoria.id === e.currentTarget.id);

			tituloPrincipal.innerText = platilloCategoria.categoria.nombre;
			const platillosBoton = platillos.filter(platillo => platillo.categoria.id === e.currentTarget.id);


		cargarPlatillos(platillosBoton);
		} else {
			tituloPrincipal.innerText = "Todos los platillos";
			cargarPlatillos(platillos);
		}
	})
});

function actualizarBotonesAgregar(){
	botonesAgregar = document.querySelectorAll(".boton-agregar");

	botonesAgregar.forEach(boton => {
		boton.addEventListener("click", agregarAlCarrito);
	});
}

let platillosEnCarritoCielitoLindo;
const platillosEnCarritoCielitoLindoLS = JSON.parse(localStorage.getItem("platillos-cielito-lindo"));
if (platillosEnCarritoCielitoLindoLS) {
	platillosEnCarritoCielitoLindo = platillosEnCarritoCielitoLindoLS;
	actualizarNumerito();
}
else{
	platillosEnCarritoCielitoLindo = [];
}
 

function agregarAlCarrito(e) {
	Toastify({
  		text: "platillo agregado al carrito",
  		duration: 2000,
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
	const platilloAgregado = platillos.find(platillo => platillo.id === idBoton);

	if (platillosEnCarritoCielitoLindo.some(platillo => platillo.id === idBoton)) {
		const index = platillosEnCarritoCielitoLindo.findIndex(platillo => platillo.id === idBoton);
		platillosEnCarritoCielitoLindo[index].cantidad++;

	}
	else{
		platilloAgregado.cantidad = 1;
		platillosEnCarritoCielitoLindo.push(platilloAgregado);	
	}

	actualizarNumerito();

		localStorage.setItem("platillos-cielito-lindo", JSON.stringify(platillosEnCarritoCielitoLindo));

}

function actualizarNumerito(){
	let nuevoNumerito = platillosEnCarritoCielitoLindo.reduce((acc, platillo)=> acc + platillo.cantidad, 0);
	numerito.innerText = nuevoNumerito;
}

window.onload = actualizarPagina();

        function actualizarPagina() {
            let actualizar = false;
            momentoActual = new Date();
            hora = momentoActual.getHours();
            minuto = momentoActual.getMinutes();
            segundo = momentoActual.getSeconds();

            str_segundo = new String (segundo);
            if (str_segundo.length == 1) {
                segundo = "0" + segundo;
            }
            str_minuto = new String (minuto);
            if (str_minuto.length == 1){
                minuto = "0" + minuto;
            }
            str_hora = new String (hora);
            if (str_hora.length == 1){
                hora = "0" + hora;
            }
            horaImprimible = hora + ":" + minuto + ":" + segundo;
            if(horaImprimible == "12:49:00") {
                actualizar = true;
            }
            setTimeout("actualizarPagina()",1000);
            if(actualizar == true) {//Comprueba que la hora es igual a la que quieres y actualiza
                location.reload();
            }
        }




