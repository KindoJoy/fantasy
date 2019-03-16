import React from 'react';
import Child from './Child';

class Parent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: 'This is a Parent Component!',
            childTitle: 'This is the title of the Parent passed!',
            name: 'Parent',
            id: 1
        };
    }

    showChildId = () => {
        alert(this.refs.child.state.id);
    }

    render() {
        return (
            <div>
                <h2>Parent title:{this.state.title}</h2>
                <Child ref="child" title={this.state.childTitle} parentId={this.state.id} />
                <button onClick={this.showChildId}>showChildId</button>
            </div>
        )
    }
}

export default Parent;