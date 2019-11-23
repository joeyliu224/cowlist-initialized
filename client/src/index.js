import React from "react";
import ReactDOM from "react-dom";
import List from './components/List.js';
import Form from './components/Form.js';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cows:[],
      display: null,
      isClicked: false,
      needUpdate: false,
      updateName: {name:''}
    };
    this.getCows.bind(this);
    this.handleClick.bind(this);
    this.handleDelete.bind(this);
    this.handleUpdate.bind(this);
    this.handleNameChange.bind(this);
  }

  getCows(){
    axios.get('/api/cows').then(
      (cowlist) => {
        console.log(cowlist)
        this.setState({
          cows: cowlist.data
        })
      }
    )
  }

  handleClick(e){
    const target = e.target;
    const name = target.textContent;
    var description;
    for(var cow of this.state.cows) {
      if(cow.name === name){
        description = cow.description;
      }
    }
    this.setState({
      isClicked: !this.state.isClicked,
      display: `${name}:${description}`
    })
  }

  handleDelete(e){
    const target = e.target;
    const id = target.id;
    axios.delete(`/api/cows:${id}`).then(
      () =>{
        this.getCows()
      }
    )
  }

  handleUpdate(e) {
    const id = e.target.id;
    
    this.setState({
      needUpdate: !this.state.needUpdate
    })
  }

  handleNameChange(e) {
    const target = e.target;
    console.log({target})
    this.setState({
      updateName: {name: target.value}
    })

  }
  handleUpdateSubmit(e){
    const target = e.target;
    const id = target.id;
    axios.put(`/api/cows:${id}`,this.state.updateName).then(
      ()=>{
        this.getCows();
      }
    )
  }

  componentDidMount(){
    console.log(this.state)
    this.getCows();
  };

  render() {
    return (
    <div>
      <h1>Cowlist</h1>
      <div>{this.state.display}</div>
      <Form getCows={this.getCows.bind(this)}/>
      <List 
        cows={this.state.cows}
        handleClick={this.handleClick.bind(this)}
        handleDelete={this.handleDelete.bind(this)}
        handleUpdate={this.handleUpdate.bind(this)}
        handleNameChange={this.handleNameChange.bind(this)}
        needUpdate={this.state.needUpdate}
        handleUpdateSubmit={this.handleUpdateSubmit.bind(this)}/>
    </div>
    );
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App/>, mountNode);