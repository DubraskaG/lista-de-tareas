function agregarTarea(){
    
    //Obtenemos el valor del campo de la tarea
    let nuevaTareaTexto = document.getElementById('nuevaTarea').value;

    //Validamos que el valor no sea vacío
    if (nuevaTareaTexto === "") {
        alert("Por favor ingrese una tarea");
        return;
    }

    //Creamos elementos en la lista
    let nuevaTarea = document.createElement("li");
    nuevaTarea.textContent = nuevaTareaTexto + " ";

    //Crear botón eliminar
    let botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.onclick = function() {nuevaTarea.remove()};

    //Agregar botón eliminar al elemento de la lista
    nuevaTarea.appendChild(botonEliminar)

    //Agregar el elemento/la tarea a la lista
    document.getElementById('listaDeTareas').appendChild(nuevaTarea);

    //limpiar el cuadro de texto de la tarea 
    document.getElementById('nuevaTarea').value = "";
}