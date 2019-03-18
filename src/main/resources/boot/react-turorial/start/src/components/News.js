import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class News extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list: [
                { id: 0, title: 'Love', content: 'I love you!' },
                { id: 1, title: 'Like', content: 'I like you!' },
                { id: 2, title: 'Hate', content: 'I hate you!' }
            ]
        };
    }
    render() {
        return (
            <ul>
                {
                    this.state.list.map(item => {
                        let { id, title, content } = item;
                        let url = `/news/${id}?content=${content}`;
                        return (
                            <li key={id}><Link to={url}>{title}</Link></li>
                        )
                    })
                }
            </ul>
        );
    }
}

export default News;