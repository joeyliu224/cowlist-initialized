import React, { Component } from 'react'
import Axios from 'axios';

export class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            description: ''
        }
    }
    

    handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(e){
        e.preventDefault();
        Axios.post('/api/cows',this.state).then(
            () => {
                this.props.getCows()
            }
        )
    }

    render() {
        return (
            <div>
               <form onSubmit={this.handleSubmit.bind(this)}>
                   <label>
                       name:
                       <input name='name' type='text' value={this.state.name} onChange={this.handleChange.bind(this)}/>
                   </label><br/>
                   <label>
                       description:
                       <input name='description' type='text' value={this.state.description} onChange={this.handleChange.bind(this)}/>
                   </label><br/>
                   <input type='submit' value='Submit'/>
               </form> 
            </div>
        )
    }
}

export default Form

