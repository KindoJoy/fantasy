import React from 'react';
import PropTypes from 'prop-types';

class LifeCycle extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            status: false
        };

        console.log('lifeCycle-constructor：组件初始化');
    }

    updateCmp = () => {
        this.setState({ status: !this.state.status });
        console.log('-----');
    }

    shouldComponentUpdate() {
        console.log('lifeCycle-shouldComponentUpdate：组件是否更新');
        //返回true更新，返回false不更新
        return true;
    }

    componentWillMount() {
        console.log('lifeCycle-componentWillMount：组件即将挂载');
    }

    componentDidMount() {
        console.log('lifeCycle-componentDidMount：组件已挂载');
    }

    componentWillUnmount() {
        console.log('lifeCycle-componentWillUnmount：组件即将卸载');
    }

    componentWillUpdate(){
        console.log('lifeCycle-componentWillUpdate：组件即将更新');
    }

    componentDidUpdate() {
        console.log('lifeCycle-componentDidUpdate：组件已更新');
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        console.log('lifeCycle-componentWillReceiveProps：组件即将接收父组件传值');
    }

    componentDidCatch(error) {
        console.log(error);
        console.log('lifeCycle-componentDidCatch：组件已捕获错误');
    }

    render() {
        console.log('lifeCycle-render：组件渲染');
        return (
            <div>
                <h2>{this.props.title}</h2>
                <h2>status:{this.state.status.toString()}</h2>
                <h2>num:{this.props.num}</h2>
                <button onClick={this.updateCmp}>更新组件</button>
            </div>
        )
    }
}

LifeCycle.defaultProps = {
    title: 'life cycle'
};

LifeCycle.propTypes = {
    num: PropTypes.number
};

export default LifeCycle;