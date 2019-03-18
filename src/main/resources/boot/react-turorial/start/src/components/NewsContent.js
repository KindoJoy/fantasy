import React, { Component } from 'react';
import Url from 'url';

class NewsContent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '',
            content: ''
        };
    }

    componentWillMount() {
        console.log(this.props);
        let content = Url.parse(this.props.location.search, true).query.content;
        let id = this.props.match.params.id;
        this.setState({ id, content });
    }

    render() {
        return (
            <div>
                <h2>This is news content</h2>
                <div>newsId:{this.state.id}</div>
                <div>newsContent:{this.state.content}</div>
            </div>
        );
    }
}

export default NewsContent;