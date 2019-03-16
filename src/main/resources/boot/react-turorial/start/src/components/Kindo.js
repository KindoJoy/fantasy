import React, { Component } from 'react';

class Kindo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'Kindo',
            age: 29
        };
    }

    render() {
        return (
            <div>
                Hello,{this.state.name},your age:{this.state.age}!
            </div>
        );
    }
}

export default Kindo;