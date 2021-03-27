import React from 'react';
import './Todos.css';

export default class Todos extends React.Component {
    getStyle = () => {
        return {
            background: "#f4f4f4",
            padding: "10px",
            borderBottom: "1px #ccc dotted",
        };
    };

    state = {
        loading: true,
        info: null,
    };
      
    async componentDidMount() {
        const url = "https://jsonplaceholder.typicode.com/todos";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({info: data, loading: false})
        //this.setState({task: data[0], loading: false})
    }

    grabTasks(info) {
        const tasks = []
        for(let i=0; i<30; i++){
            tasks.push(info[i].title);
        }
        const listTasks = tasks.map((task, index) =>
            <li className={this.getStyle()}>{task}</li>
        );
        return listTasks;
    }
    
    render() {

        if(this.state.loading) {
            return <div>loading...</div>;
        }

        return (
            <div>{this.grabTasks(this.state.info)}</div>
        );
    }

}
