import React,{ Component, PropTypes } from 'react'
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {Router,Route,IndexRoute,Redirect,Link,browserHistory} from 'react-router'
import { addTodo, deleteTodo,completeTodo, completeAll} from '../actions/todoAction';

//import all presentaiton component
import AddTodo from '../components/todo/addTodo';
import TodoList from '../components/todo/todoList';


class Todo extends Component {
  render() {
    // Injected by connect() call:
    const { dispatch, visibleTodos} = this.props
    return (
      <div className="content-container">
        <AddTodo
          onAddClick={(text) => {
              dispatch(addTodo(text))
            }
          }/>
        <TodoList
          todos={visibleTodos}
          onTodoClick={id =>
            dispatch(completeTodo(id))
          }/>
      </div>
    )
  }
}


Todo.propTypes = {
  visibleTodos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired).isRequired,
}


function select(state) {
  return {
    visibleTodos: state.todos
  };
}


export default connect(select)(Todo);
