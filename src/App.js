import React, { Component }from 'react';
import './App.css';
import UserOutput from './Components/UserOutput';
import UserInput from './Components/UserInput';

class App extends Component {
  constructor(props){
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username1: "Victor",
      username2: "Samule",
      username3: "Hassan"
    }
  }

  onSubmit(e) {
    e.preventDefault();
    
  }

  onChangeUsername(e) {
    this.setState({
      username1: e.target.value,
      username2: e.target.value,
      username3: e.target.value
    });
    
  }

  render() {


  return (
    <div style={styled}>
      <h3>React basics final task</h3>
      <div>
      <UserInput onChange={this.onChangeUsername}/>
      <UserOutput username = {this.state.username1} />
      <UserOutput username = {this.state.username2} />
      <UserOutput username = {this.state.username3} />
      </div>
    </div>
  );
}
}

const styled = {
  textAlign: 'center',
  backgroundColor: 'lightgrey',
  
}
export default App;
