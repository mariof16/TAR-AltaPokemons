import { Vista } from './vista.js'
export class VistaListar extends Vista{
    constructor (controlador, base) {
        super(controlador,base)
        this.controlador = controlador
        this.base = base

        this.btnaniadir = document.getElementById("btnaniadir")
        this.btnaniadir.onclick = this.irAniadir

        this.divlista = document.getElementById("divlista")
    }
    irAniadir = () => {
        this.controlador.irAVista(this.controlador.vistaAniadir)
    }
    listarPokemons = () => {
        let datos = this.controlador.listarPokemons();
        this.divlista.innerHTML = ""
      
        for (let i = 0; i < datos.length; i++) {
          let pokemonDiv = document.createElement("div")
      
          for (let j = 0; j < 4; j++) {
            let pElement = document.createElement("p")
            pElement.textContent = datos[i][j]
            pokemonDiv.appendChild(pElement)
          }
          this.divlista.appendChild(pokemonDiv)
        }
      };
}
