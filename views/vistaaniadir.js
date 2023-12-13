import { Vista } from './vista.js'
export class VistaAniadir extends Vista{
    constructor (controlador, base) {
        super(controlador,base)
        this.controlador = controlador
        this.base = base
        
        this.btnlista = document.getElementById("btnlista")
        this.btnlista.onclick = this.irLista
    }
    irLista = () => {
        this.controlador.irAVista(this.controlador.vistaListar)
    }
}
