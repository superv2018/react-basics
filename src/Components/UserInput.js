import React, { Component } from 'react';

class UserInput extends Component {
    constructor(props){
        super(props);
        console.log(props)
    }
    render() {
        return(
            <div className="app">
             <form>
                 <label htmlfor="name">Enter a name
                 <input  type="text"  onChange={this.props.onChange} value={this.props.username}/></label>
               
             </form>
            </div>
        )
    }
}


export default UserInput;