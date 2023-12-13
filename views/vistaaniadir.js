import { Vista } from './vista.js'
export class VistaAniadir extends Vista{
    constructor (controlador, base) {
        super(controlador,base)
        this.controlador = controlador
        this.base = base
        
        this.btnlista = document.getElementById("btnlista")
        this.btnlista.onclick = this.irLista

        this.btnguardar = document.getElementById("btnguardar")
        this.btnguardar.onclick = this.guardar

        this.nombre = document.getElementById("nombre")
        this.vida = document.getElementById("vida")
        this.fuerza = document.getElementById("fuerza")
        this.magia = document.getElementById("magia")

    }
    irLista = () => {
        this.controlador.irAVista(this.controlador.vistaListar)
        this.controlador.vistaListar.listarPokemons()
    }
    guardar = () =>{
        let pokemon = [
            this.nombre.value,
            this.vida.value,
            this.fuerza.value,
            this.magia.value
        ]
        this.controlador.almacenarPokemon(pokemon)

        this.nombre.value = ""
        this.vida.value = ""
        this.fuerza.value = ""
        this.magia.value = ""
    }
}
