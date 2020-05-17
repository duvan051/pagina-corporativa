function datos(){
	var etiqueta="";
	var parametros=location.search.substr(1).split("&");
	parametros.forEach(function(item){
		campos=item.split("=");
		if (campos[0]!="Enviar") {
			switch(campos[0]){
				case "nombre": etiqueta="Nombres";break;
				case "apellidos": etiqueta="Apellidos";break;
				case "direccion": etiqueta="Direccion";break;
				case "cedula": etiqueta="Cedula";break;
				case "celular": etiqueta="Celular";break;
				case "email": etiqueta="Email";break;
			}
			document.getElementById("parrafo").innerHTML+= etiqueta +": "+ campos[1] +"<br>";
		}
		});

	document.getElementById("parrafo").innerHTML+=
	"<br><input type='button' value='Regresar' onclick='regresar()' style='border-radius: 5px;background-color: #F9751D; width: 150px;height: 40px;font-size: 14px; color: white; margin-left: 150px;'>";

}

function regresar(){
	window.open("sitio web.html","_self");
}