import React, {Component} from 'react';
import NamesContainer from './NamesContainer/NamesContainer'
import TypeContainer from './TypeContainer/TypeContainer'
import AbilityContainer from './AbilityContainer/AbilityContainer'


class PokemonApp extends Component {
    constructor(){
      super();
      this.state = {
        chosenPage: null
      }
    }
    changePage = (e) => {
      console.log(e.target.id);
      this.setState({
        chosenPage: e.target.id
      })
    }
    render(){
      return (
        <div className="pokemonApp">
          <button onClick={this.changePage} id="pokemon">Show me the POKEMON!!!!!!!</button>
          <button onClick={this.changePage} id="abilities">Show me the POKEMON ABILITIES!!!!!!!</button>
          <button onClick={this.changePage} id="types">Show me the POKEMON TYPES!!!!!!!</button>
          {
            this.state.chosenPage === null ?
              null
              :
              this.state.chosenPage === "pokemon" ?
                <NamesContainer></NamesContainer>
                :
                this.state.chosenPage === "abilities" ?
                  <AbilityContainer></AbilityContainer>
                  :
                  <TypeContainer></TypeContainer>
          }
        </div>
      );
    }
  }



export default PokemonApp;