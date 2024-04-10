
// --------------------------------Invitados---------------------------------


 // Función para buscar la mesa por nombre
 function buscarMesa() {
    // Obtener el valor del nombre de la búsqueda
    var nombreBuscado = document.getElementById("nombreBusqueda").value;
  
    // Validar si se ingresó un nombre
    if (nombreBuscado.trim() !== "") {
      // Simular una búsqueda (puedes ajustar esto según tu situación real)
      var mesaInfo = obtenerInformacionMesa(nombreBuscado);
  
      // Validar si se encontró la mesa
      if (mesaInfo !== null) {
        // Crear el texto a desplegar
        var texto = "¡Hola, " + nombreBuscado + "! Le informamos que la mesa asignada es la número: " + mesaInfo.mesa + " y tu invitación corresponde para: " + mesaInfo.invitadosPermitidos + " persona/as.";
  
        // Mostrar el texto en el div de resultado con transición suave
        var resultadoDiv = document.getElementById("resultado");
        resultadoDiv.innerText = texto;
        resultadoDiv.style.display = "block"; // Mostrar el div
        resultadoDiv.style.opacity = 1;
  
        // Limpiar el input de búsqueda
        document.getElementById("nombreBusqueda").value = "";
      } else {
        alert("Lo siento, no se encontró ninguna mesa para el nombre ingresado.");
      }
    } else {
      alert("Por favor, ingrese su nombre.");
    }
  }
  
  // Función de ejemplo para obtener la información de la mesa (puedes personalizar según tus necesidades)
  function obtenerInformacionMesa(nombre) {
    // Simulamos una búsqueda, aquí deberías implementar la lógica real
    var invitados = [
      { nombre: "Juan", mesa: 3, invitadosPermitidos: 1 },
      { nombre: "Familia Diaz", mesa: 7, invitadosPermitidos: 4 },
      { nombre: "Carlos", mesa: 3, invitadosPermitidos: 4 },
      { nombre: "Noelia Fuenzalida", mesa: 3, invitadosPermitidos: 1 }
      // ... más invitados
    ];
  
    for (var i = 0; i < invitados.length; i++) {
      if (invitados[i].nombre.toLowerCase() === nombre.toLowerCase()) {
        return { mesa: invitados[i].mesa, invitadosPermitidos: invitados[i].invitadosPermitidos };
      }
    }
  
    return null; // Retornar null si no se encuentra el nombre
  }


