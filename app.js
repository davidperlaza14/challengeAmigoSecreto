// Lista para almacenar los nombres de los amigos
const amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    // Obtener el campo de entrada de nombres
    const nombreEntrada = document.getElementById("amigo");
    // Obtener el valor del campo de entrada y eliminar espacios en blanco al inicio y final
    const nombre = nombreEntrada.value.trim();
    
    // Validar si el nombre está vacío
    if (nombre === "") {
        alert("Por favor, ingrese un nombre válido."); // Mostrar alerta si el campo está vacío
        return; // Salir de la función sin agregar el nombre
    }
    
    // Agregar el nombre a la lista de amigos
    amigos.push(nombre);
    // Actualizar la lista visible en la interfaz
    actualizarLista();
    // Limpiar el campo de entrada después de añadir un nombre
    nombreEntrada.value = "";
}

// Función para actualizar la lista de amigos en la interfaz
function actualizarLista() {
    // Obtener el elemento de la lista en el DOM
    const lista = document.getElementById("listaAmigos");
    // Limpiar el contenido actual de la lista para evitar duplicados
    lista.innerHTML = "";
    
    // Recorrer la lista de amigos y agregarlos como elementos de la lista en la interfaz
    amigos.forEach((amigo, index) => {
        const li = document.createElement("li"); // Crear un nuevo elemento de lista
        li.textContent = amigo; // Asignar el nombre del amigo como contenido del elemento
        lista.appendChild(li); // Agregar el elemento a la lista en la interfaz
    });
}

// Función para realizar el sorteo del amigo secreto
function sortearAmigo() {
    // Verificar si hay nombres en la lista antes de sortear
    if (amigos.length === 0) {
        alert("No hay nombres en la lista para sortear."); // Mostrar alerta si la lista está vacía
        return; // Salir de la función sin realizar el sorteo
    }
    
    // Generar un índice aleatorio dentro del rango de la lista de amigos
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    // Obtener el nombre del amigo seleccionado aleatoriamente
    const amigoSorteado = amigos[indiceAleatorio];
    
    // Obtener el elemento donde se mostrará el resultado
    const resultado = document.getElementById("resultado");
    // Mostrar el nombre del amigo sorteado en la interfaz
    resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigoSorteado}</strong> 🎉</li>`;
}
