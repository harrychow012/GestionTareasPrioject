const tareas = [];

function agregarTarea() {
    const descripcion = document.getElementById("descripcion").value;
    const fecha = document.getElementById("fecha").value;
    const prioridad = document.getElementById("prioridad").value;

    if (descripcion && fecha && prioridad) {
        const tarea = {
            descripcion,
            fecha,
            prioridad,
            completada: false 
        };
        tareas.push(tarea);
        mostrarTareasPendientes();
        limpiarCampos();
    }
}

function mostrarTareasPendientes() {
    const tareasPendientes = document.getElementById("tareasPendientes");
    tareasPendientes.innerHTML = "";

    tareas.forEach((tarea, index) => {
        const tareaDiv = document.createElement("div");
        tareaDiv.classList.add("item-tarea");

        if (tarea.completada) {
            tareaDiv.style.textDecoration = "line-through";
        }
        tareaDiv.innerHTML = `
            <p><strong>Descripción:</strong> ${tarea.descripcion}</p>
            <p><strong>Fecha de vencimiento:</strong> ${tarea.fecha}</p>
            <p><strong>Prioridad:</strong> ${tarea.prioridad}</p>
            <button class="boton-completar" onclick="marcarComoCompleta(${index})">
                ${tarea.completada ? "Desmarcar" : "Marcar"} como completa
            </button>
        `;
        tareasPendientes.appendChild(tareaDiv);
    });


document.getElementById("boton-agregar-tarea").addEventListener("click", agregarTarea);


