import { VistaAniadir } from './views/vistaaniadir.js'
import { VistaListar } from './views/vistalistar.js'
import { ModeloPokemons } from './models/modelopokemons.js'
class Controller{
    constructor(){
      const divaniadir = document.getElementById("vistaaniadir")
      const divlistar = document.getElementById("vistalistar")
      
      this.vistaAniadir = new VistaAniadir(this,divaniadir)       
      this.vistaListar = new VistaListar(this,divlistar)
      this.modeloPokemons = new ModeloPokemons

      this.vistas = [this.vistaAniadir,this.vistaListar]

      this.irAVista(this.vistaAniadir)
    }
    ocultarVistas () {
      this.vistas.forEach(vista => {
        vista.mostrar(false)
      })
    }
    irAVista (vista) {
      this.ocultarVistas()
      vista.mostrar(true)
    }
    almacenarPokemon (pokemon) {
      this.modeloPokemons.guardarPokemon(pokemon)
    }
    listarPokemons(){
     return this.modeloPokemons.listar()
    }
}
window.onload = () => new Controller()