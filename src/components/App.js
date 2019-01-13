import React, { Component } from 'react';
import './App.css';
import Footer from './Footer'
import AddTodo from './../containers/AddTodo'
import VisibilityTodoList from './../containers/VisibilityTodoList'

class App extends Component {
  render() {
    return (
      <div className="App">
          <header className="App-header">
            <AddTodo />
            <VisibilityTodoList />
            <Footer />
          </header>
      </div>
    );
  }
}

export default App;
