import React from 'react';

class TodoList extends React.Component {
    constructor(props) {
        super(props);

        this.keySeed = Date.now();

        this.state = {
            newTodo: '',
            list: []
        };
    }

    newKey() {
        return (++this.keySeed).toString(36);
    }

    enterAddTodo = (e) => {
        if (e.keyCode === 13) {
            this.addTodo();
        }
    }

    addTodo = () => {
        let newTodo = this.refs.newTodo;
        if (newTodo.value.length > 0) {
            let list = this.state.list;
            let title = newTodo.value;

            let target = list.find(item => title === item.title);
            if (target) {
                return alert('It already exists!');
            }

            let key = this.newKey();
            let checked = false;

            list.push({ key, title, checked });
            this.setState({ list });
            this.saveList();
            newTodo.value = '';
        }
    }

    changeTodoChecked = (key) => {
        let list = this.state.list;
        let target = list.find(item => key === item.key);
        if (target) {
            target.checked = !target.checked;
            this.setState({ list });
            this.saveList();
        }
    }

    removeTodo = (key) => {
        let list = this.state.list;
        let index = list.findIndex(item => key === item.key);
        if (index > -1) {
            list.splice(index, 1);
            this.setState({ list });
            this.saveList();
        }
    }

    saveList() {
        sessionStorage.setItem('list', JSON.stringify(this.state.list));
    }

    componentDidMount() {
        let list = sessionStorage.getItem('list');
        if (list) {
            try {
                list = JSON.parse(list);
                this.setState({ list });
            } catch (e) {
                console.log(e);
            }
        }
    }

    render() {
        let todoList = this.state.list.filter(item => !item.checked);
        let finishedList = this.state.list.filter(item => item.checked);

        return (
            <div>
                <h2>Welcome todoList!</h2>
                <div>
                    <input ref="newTodo" onKeyUp={this.enterAddTodo} />
                    <button onClick={this.addTodo}>Add new to do</button>
                </div>
                <div>
                    <h3>Todo</h3>
                    <ol>
                        {
                            todoList.map(item => {
                                return (
                                    <li key={item.key}>
                                        <input type="checkbox" checked={item.checked} onChange={this.changeTodoChecked.bind(this, item.key)} />
                                        {item.title}
                                        <button onClick={this.removeTodo.bind(this, item.key)}>remove</button>
                                    </li>
                                )
                            })
                        }
                    </ol>
                </div>
                <div>
                    <h3>Finished</h3>
                    <ol>
                        {
                            finishedList.map(item => {
                                return (
                                    <li key={item.key}>
                                        <input type="checkbox" checked={item.checked} onChange={this.changeTodoChecked.bind(this, item.key)} />
                                        {item.title}
                                    </li>
                                )
                            })
                        }
                    </ol>
                </div>
            </div>
        )
    }
}

export default TodoList;