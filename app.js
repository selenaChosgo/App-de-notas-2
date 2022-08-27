const process = require('process') 

const funcionesDeTareas = require('./funcionesDeTareas')

let terminal = process.argv[2]




switch (terminal) {
    case 'listar':
        let tareas = funcionesDeTareas.leerJson()
        for (let index = 0; index < tareas.length; index++ ){

            console.log(`Tarea : ${tareas[index].titulo}\nEstado: ${tareas[index].estado}`)
            console.log('********************************************')
        }
    break;
    case 'crear':
            let titulo = process.argv[3]
            let estado = process.argv[4]
            funcionesDeTareas.crearTarea(titulo, estado)
    break
    case 'filtrar':
        let filtro = process.argv[3]
        let tareasFiltradas = funcionesDeTareas.filtrarPorEstado(filtro)
        console.log(`tareas filtradas por ${filtro}`)
        console.log('_____________________________________________')
        tareasFiltradas.forEach((tarea) =>{
        console.log(`Tarea: ${tarea.titulo}`)
        console.log('/****************************************/')
        })
    break

    case undefined:
        console.log('Atención - tenes que pasar una acción')
    break

default:
    console.log('No entiendo que queres decir')
    
}



