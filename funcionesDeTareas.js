const fs = require('fs')


let funcionesDeTareas ={
    archivo: './tareas.json',
    leerJson: function(){
        let tareasJson= fs.readFileSync('./tareas.json', 'utf-8')
        let tareasParse =JSON.parse(tareasJson)
        return tareasParse

    },
    crearTarea: function (titulo, estado){
        let nuevaTarea = {
            titulo: titulo,
            estado: estado
        }
        let tareasAnteriores = this.leerJson()

        tareasAnteriores.push(nuevaTarea)

        this.escribirJson(tareasAnteriores)
    },
    escribirJson: function(datos){
        let nuevoJson = JSON.stringify(datos)
        fs.writeFileSync(this.archivo, nuevoJson, 'utf-8') 
    },
    filtrarPorEstado : function(estado){
        let tareas = this.leerJson()
        let tareasFiltradasPorEstado= tareas.filter((tarea)=> tarea.estado == estado)
        return tareasFiltradasPorEstado 
    }
    
}

module.exports = funcionesDeTareas