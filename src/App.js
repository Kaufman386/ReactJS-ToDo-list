import Header from './Header.js';
import Todos from './Todos.js';

// eslint-disable-next-line
import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios'
import React from 'react';

export default class FetchTask extends React.Component {
  
  state = {
    loading: true,
    task: [],
  };
  
  async componentDidMount() {
    const url = "https://jsonplaceholder.typicode.com/todos";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({task: data, loading: false})
    //this.setState({task: data[0], loading: false})
  }
  
  render() {

    if(this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.task) {
      return <div>didn't get a task</div>;
    }

    return (
      <div>
        <Header />
        <Todos />
      </div>
    );
  }
}

// ignores google extensions
<script>
window.__REACT_DEVTOOLS_GLOBAL_HOOK__.inject = function () {}
</script>

