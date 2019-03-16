import React from 'react';

import '../assets/css/Alias.css';

class Alias extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            className: 'alias',
            style: {
                background: 'grey',
                fontWeight: 'bold'
            }
        }
    }

    render() {
        return (
            <div>
                <h2>Alias:</h2>
                <div className={this.state.className}>class for className</div>
                <div style={{ color: 'blue', fontSize: '32px' }}>inline style 1</div>
                <div style={this.state.style}>inline style 2</div>
                <label htmlFor="alias" title="alias">alias:</label>
                <input id="alias" />
            </div>
        )
    }
}

export default Alias;