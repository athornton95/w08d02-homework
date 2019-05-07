import React, {Component} from 'react';
import AbilitySearchFrom from './AbilitySearchForm/AbilitySearchForm'

class AbilityContainer extends Component {
    constructor(){
        super();
        this.state = {
            abilities: []
        }
    }
    componentDidMount(){
        this.searchAbilities({search: ""});
    }
    searchAbilities = async (formData) => {
        const searchURL = `https://pokeapi.co/api/v2/ability?search=${formData.search}`
        const result = await fetch(searchURL);
        const parsedResult = await result.json();
        this.setState({
            abilities: parsedResult.results
        })
    }
    render(){
        const abilityList = this.state.abilities.map((ability) => {
            return (
                <div key = {ability.name}>
                    <h5>{ability.name}</h5>
                </div>
            )
        })
        return <div>
            <h2>Pokemon ABILITIES!!!!!!!</h2>
                <AbilitySearchFrom searchAbilities = {this.searchAbilities}/>
                {abilityList}
        </div>
    }
}


export default AbilityContainer;