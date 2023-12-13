import { Vista } from './vista.js'
export class VistaListar extends Vista{
    constructor (controlador, base) {
        super(controlador,base)
        this.controlador = controlador
        this.base = base

        this.btnaniadir = document.getElementById("btnaniadir")
        this.btnaniadir.onclick = this.irAniadir
    }
    irAniadir = () => {
        this.controlador.irAVista(this.controlador.vistaAniadir)
    }
}
