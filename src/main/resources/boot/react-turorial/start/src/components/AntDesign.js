import React from 'react';

import { Button, Icon } from 'antd';


class AntDesign extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div>
                <Button type="primary">Button</Button>
                <br />
                <Icon type="play-circle" theme="twoTone" />
            </div>
        )
    }
}

export default AntDesign;