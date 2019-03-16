import React, { Component } from 'react';

class EventBind extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: ''
        };
    }

    inputChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    showName = () => {
        alert(this.state.name)
    }

    showName2 = () => {
        alert(this.refs.name.value)
    }

    render() {
        return (
            <div>
                <h2>{this.state.name}</h2>
                <input onChange={this.inputChange} /> <button onClick={this.showName}>showName</button>
                <input ref="name" /> <button onClick={this.showName2}>showName</button>
            </div>
        )
    }
}

export default EventBind;