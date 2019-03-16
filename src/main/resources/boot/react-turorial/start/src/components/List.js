import React from 'react';

class List extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            numList: [0, 1, 2],
            infoList: [
                { name: "Java" },
                { name: "Python" },
                { name: "Ruby" },
            ]
        }
    }

    render() {
        let numList = this.state.numList.map((value, key) => {
            return <li key={key}>{value}</li>
        })
        return (
            <div>
                <ul>{numList}</ul>
                <ul>
                    {
                        this.state.infoList.map((value, key) => {
                            return (<li key={key}>{value.name}</li>)
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default List;