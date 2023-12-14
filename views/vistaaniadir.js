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

        this.puntos = document.getElementById("puntos")
        this.nombre = document.getElementById("nombre")
        this.vida = document.getElementById("vida")
        this.fuerza = document.getElementById("fuerza")
        this.magia = document.getElementById("magia")
       
        this.vida.addEventListener('input', this.actualizarValor);
        this.fuerza.addEventListener('input', this.actualizarValor);
        this.magia.addEventListener('input', this.actualizarValor);

        this.vida.addEventListener('wheel', this.aumentarDisminuirCampo);
        this.fuerza.addEventListener('wheel', this.aumentarDisminuirCampo);
        this.magia.addEventListener('wheel', this.aumentarDisminuirCampo);
    
        this.puntos.value = 100
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
    actualizarValor = () => {
        this.puntos.value = 100-this.vida.value-this.fuerza.value-this.magia.value
        if(this.puntos.value<0)
        {
            this.puntos.value = 100
            this.vida.value=0
            this.fuerza.value=0
            this.magia.value=0
        }
    }
    aumentarDisminuirCampo = (event) => {
        event.preventDefault()
        if(this.puntos.value>=0){
            const delta = event.deltaY > 0 ? -1 : 1
            const input = event.target
            const currentValue = parseFloat(input.value) || 0
            const step = parseFloat(input.step) || 1
            const newValue = currentValue + step * delta
            
            input.value = newValue

            const inputEvent = new Event('input', { bubbles: true })
            input.dispatchEvent(inputEvent)
        }
    }
}