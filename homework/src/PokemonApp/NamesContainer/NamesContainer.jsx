import React, {Component} from 'react';
import NameSearchForm from './NameSearchForm/NameSearchForm'

class NamesContainer extends Component {
    constructor(){
        super();
        this.state = {
            pokemon: []
        }
    }
    componentDidMount(){
        this.searchPokemon({search: ""});
    }
    searchPokemon = async (formData) => {
        const searchURL = `https://pokeapi.co/api/v2/pokemon?search=${formData.search}`
        const result = await fetch(searchURL);
        const parsedResult = await result.json();
        this.setState({
            pokemon: parsedResult.results
        })
    }
    render(){
        const pokemonList = this.state.pokemon.map((pokemon) => {
            return (
                <div key = {pokemon.name}>
                    <h5>{pokemon.name}</h5>
                </div>
            )
        })
        return <div>
            <h2>Pokemon!!!!!!!</h2>
                <NameSearchForm searchPokemon = {this.searchPokemon}/>
                {pokemonList}
        </div>
    }
}


export default NamesContainer;