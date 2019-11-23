import React, { Component } from 'react'

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

    render() {
        return (
            <div>
               <form>
                   <label>
                       name:
                       <input name='name' type='text' value={this.state.name} onChange={this.handleChange.bind(this)}/>
                   </label><br/>
                   <label>
                       description:
                       <input name='description' type='text' value={this.state.description} onChange={this.handleChange.bind(this)}/>
                   </label><br/>
               </form> 
            </div>
        )
    }
}

export default Form

