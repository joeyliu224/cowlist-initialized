import React from "react";
import ReactDOM from "react-dom";
const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cows: [],
      name: '',
      description: '',
      isClicked: false,
      nameDisplay: '',
      descriptionDisplay: ''
    };
  }

  getCows() {
    axios.get('/api/cows').then(
      data => {
        console.log(data);
        this.setState({cows: data.data});
      }
    )
  };

  sendCows(event) {
    console.log(this.state)
    event.preventDefault();
    axios.post('/api/cows',{
      name: this.state.name,
      description: this.state.description
    })
  }

  handleInputChange(event) {
    const target = event.target;
    if(target.name === 'name') {
      this.setState({
        name: target.value
      })
    } else if(target.name === 'description') {
      this.setState({
        description: target.value
      })
    }
  };

  handleClick(event) {
    const target = event.target;
    console.log({target})
    const name = target.textContent;
    let des;
    for(var cow of this.state.cows) {
      if (cow.name === name) {
        des = cow.description;
      }
    }
    this.setState({
      nameDisplay: name,
      descriptionDisplay: des,
      isClicked: !this.state.isClicked});

  }

  componentDidMount() {
    console.log();
    this.getCows();
  };
  render() {
    console.log(this.state);
    return (
    <div>
      <div>Cowlist</div>
      <div>
        {this.state.isClicked ? <div>name:{this.state.nameDisplay},description:{this.state.descriptionDisplay}</div> : null}
      </div>
      <div>
        <form onSubmit={this.sendCows.bind(this)}>
          <label>
            name:
            <input 
              name='name'
              type='string'
              value={this.state.name}
              onChange={this.handleInputChange.bind(this)}
            />
          </label><br/>
          <label>
            description:
            <input 
              name='description'
              type='string'
              value={this.state.description}
              onChange={this.handleInputChange.bind(this)}
            />
          </label><br/>
          <input type="submit" value="Submit"/>
        </form>
      </div>
      <div>
        <ul>
          {
            this.state.cows.map((cow) => {
              return <li key={cow.id} onClick={this.handleClick.bind(this)}>{cow.name}</li>
            })
          }
        </ul>
      </div>
    </div>
    );
  }
}



var mountNode = document.getElementById("app");
ReactDOM.render(<App/>, mountNode);