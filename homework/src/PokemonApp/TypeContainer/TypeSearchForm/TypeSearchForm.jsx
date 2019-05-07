import React, {Component} from 'react';

class TypeSearchForm extends Component {
    constructor(){
        super();
        this.state = {
            search: ""
        }
    }
    handleChange = (e) => {
        console.log(e.target.value)
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    handleSubmit = (e) => {
        console.log(this.props.searchTypes(this.state))
        e.preventDefault();
        this.props.searchTypes(this.state);
    }
    render(){
        return <form onSubmit={this.handleSubmit}>
        What Type Pokemon? <input onChange = {this.handleChange} type="text" name="search" />
        <input type="submit" />
        </form>
    }
}



export default TypeSearchForm;

