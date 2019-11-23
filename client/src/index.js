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
      isClicked: false
    };
    this.getCows.bind(this);
    this.handleClick.bind(this);
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
    console.log({target})
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
    console.log(this.state)
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
      <List cows={this.state.cows} handleClick={this.handleClick.bind(this)} display={this.state.display}/>
    </div>
    );
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App/>, mountNode);