import React, {Component} from 'react';
import TypeSearchForm from './TypeSearchForm/TypeSearchForm'

class TypeContainer extends Component {
    constructor(){
        super();
        this.state = {
            types: []
        }
    }
    componentDidMount(){
        this.searchTypes({search: ""});
    }
    searchTypes = async (formData) => {
        const searchURL = `https://pokeapi.co/api/v2/type?search=${formData.search}`
        const result = await fetch(searchURL);
        const parsedResult = await result.json();
        this.setState({
            types: parsedResult.results
        })
    }
    render(){
        const typeList = this.state.types.map((type) => {
            return (
                <div key = {type.name}>
                    <h5>{type.name}</h5>
                </div>
            )
        })
        return <div>
            <h2>Pokemon TYPES!!!!!!!</h2>
                <TypeSearchForm searchTypes = {this.searchTypes}/>
                {typeList}
        </div>
    }
}


export default TypeContainer;