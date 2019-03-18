import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import routes from '../model/router';

class Router extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    RouteWithSubRoutes(route) {
        return (
            <Route
                exact
                path={route.path}
                render={props => (
                    // pass the sub-routes down to keep nesting
                    <route.component {...props} routes={route.routes} />
                )}
            />
        );
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <h2>React Router</h2>
                    <ul>
                        <li><Link to="/">Kindo</Link></li>
                        <li><Link to="/list">List</Link></li>
                        <li><Link to="/alias">Alias</Link></li>
                        <li><Link to="/event">Event</Link></li>
                        <li><Link to="/event-bind">EventBind</Link></li>
                        <li><Link to="/todo-list">TodoList</Link></li>
                        <li><Link to="/parent">Parent</Link></li>
                        <li><Link to="/life-cycle">Lifecycle</Link></li>
                        <li><Link to="/news">News</Link></li>
                        <li><Link to="/ant-design">Ant Design</Link></li>
                    </ul>
                    <hr />
                    {
                        routes.map((route, i) => (
                            <this.RouteWithSubRoutes key={i} {...route} />
                        ))
                    }
                </BrowserRouter>
            </div>
        );
    }
}

export default Router;