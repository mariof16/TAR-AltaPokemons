
export class ModeloPokemons {
    constructor () {

      this.listapokemons = []
    }
    guardarPokemon (pokemon) {
      this.listapokemons.push(pokemon)
    }
    listar(){
        return this.listapokemons
    }
  }
  