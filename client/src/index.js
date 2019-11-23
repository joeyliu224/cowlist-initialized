import React from "react";
import ReactDOM from "react-dom";
import List from './components/List.js';
import Form from './components/Form.js';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cows:[]
    };
    this.getCows.bind(this);
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

  componentDidMount(){
    console.log(this.state)
    this.getCows();
  };

  render() {
    return (
    <div>
      <h1>Cowlist</h1>
      <Form getCows={this.getCows.bind(this)}/>
      <List cows={this.state.cows}/>
    </div>
    );
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App/>, mountNode);