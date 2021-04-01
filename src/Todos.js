import React from 'react';


export default class Todos extends React.Component {
    getStyle = () => {
        return {
            background: "#f4f4f4",
            padding: "10px",
            borderBottom: "1px #ccc dotted",
        };
    };

    render() {
        return (
            <div>
                {this.props.toDos.map((task) => <li style={this.getStyle()}>{task.title}</li>)}
            </div>
        )
    }
}
