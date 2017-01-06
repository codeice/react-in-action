import React,{ Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { addTodo, deleteTodo,completeTodo, completeAll} from '../../actions/todo';
import AddTodo from '../../components/todo/addTodo';
import TodoList from '../../components/todo/todoList';


class Todo extends Component {
  render() {
    // Injected by connect() call:
    const {dispatch, todo} = this.props
    return (
      <div className="content-container">
        <AddTodo
          onAddClick={(text) => {
              dispatch(addTodo(text))
            }
          }/>
        <TodoList
          todos={todo}
          onTodoClick={id =>
            dispatch(completeTodo(id))
          }/>
      </div>
    )
  }
}

Todo.propTypes = {
    todo: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    }).isRequired).isRequired,
}



const mapStateToProps = (state) => {
    const { todo } = state;
    return {
        todo: todo ? todo : null,
    };
};


export default connect(mapStateToProps)(Todo);
