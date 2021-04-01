import React from 'react';

export default class Header extends React.Component {
    render() {
        const style = {
            color: "white",
            textAlign: "center",
            backgroundColor: "black",
            margin: "0",
            padding: "0"
        }
        return (
            <div>
                <h1 style={style}>To-Do List</h1>
            </div>
        )
    }
}