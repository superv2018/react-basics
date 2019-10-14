import React, { Component } from 'react';

class UserOutput extends Component {
    constructor(props) {
        super(props);
        console.log(props)
    }
    render() {
        return(
            <div className="app">
                <p>My name is {this.props.username}</p>
            </div>
        )
    }
}

export default UserOutput;