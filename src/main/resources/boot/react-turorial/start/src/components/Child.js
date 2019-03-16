import React from 'react';
import PropTypes from 'prop-types';

class Child extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: 2
        };
    }

    render() {
        return (
            <div>
                <h2>Child title:{this.props.title}</h2>
                <div>parent id:{this.props.parentId}</div>
            </div>
        )
    }
}

Child.defaultProps = {
    title: 'This is a Child Component!'
};

Child.propTypes = {
    title: PropTypes.string,
    parentId: PropTypes.number
};

export default Child;