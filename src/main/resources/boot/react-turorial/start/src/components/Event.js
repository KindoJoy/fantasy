import React from 'react';

class Event extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: 'Event handler',
            name: 'Event',
            msg: 'I am msg'
        }

        this.setName = this.setName.bind(this);
    }

    setTitle = () => {
        this.setState({
            title: 'Event handler,done!'
        })
    }

    setName() {
        this.setState({
            name: 'Event,done!'
        })
    }

    setMsg() {
        this.setState({
            msg: 'I am new msg!'
        })
    }

    setState2 = (key, val) => {
        this.setState({
            [key]: val
        })
    }

    render() {
        return (
            <div>
                <h2>title:{this.state.title}</h2>
                <h2>name:{this.state.name}</h2>
                <h2>msg:{this.state.msg}</h2>
                <button onClick={this.setTitle}>setTitle</button>
                <button onClick={this.setName}>setName</button>
                <button onClick={this.setMsg.bind(this)}>setMsg</button>
                <button onClick={this.setState2.bind(this, 'name', 'ok')}>setState2</button>
            </div>
        )
    }
}

export default Event;