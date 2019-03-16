import React, { Component } from 'react';
import LifeCycle from './LifeCycle';

class LifeCycleRoot extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flag: true,
            num: 0
        };
    }

    toggleChildCmp = () => {
        let { flag, num } = this.state;
        flag = !flag;
        if (!flag) {
            num = 0;
        }
        this.setState({ flag, num });
        console.log('-----')
    }

    increaseNum = () => {
        //给子组件绑定num，更细num时，调用componentWillReceiveProps
        this.setState({
            num: this.state.num + 1
        });
        console.log('-----')
    }

    render() {
        let flag = this.state.flag;
        let btnTitle = flag ? "卸载组件" : "装载组件";
        return (
            <div>
                {
                    flag ? <LifeCycle ref="lifeCycle" title="Life Cycle" num={this.state.num} /> : ''
                }
                <hr />
                <button onClick={this.toggleChildCmp}>{btnTitle}</button>
                {
                    flag ? <button onClick={this.increaseNum}>更新num</button> : ''
                }
            </div>
        );
    }
}

export default LifeCycleRoot;