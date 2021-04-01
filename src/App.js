import Header from './Header.js';
import Todos from './Todos.js';
import axios from 'axios';
import React from 'react';

export default class toDoList extends React.Component {
  state = {
    tasks: []
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/todos`)
      .then(res => {
        const tasks = res.data;
        this.setState({ tasks });
      })
  }

  render() {
    return (
      <div>
        <Header />
        <Todos toDos={this.state.tasks.slice(0,31)}/>
      </div>
    )
  }
}

// ignores google extensions
<script>
window.__REACT_DEVTOOLS_GLOBAL_HOOK__.inject = function () {}
</script>