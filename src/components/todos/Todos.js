import React from 'react'
import Todo from './Todo'
const Todos = (props) => {

    return (
        <div className="todos-list">
            {props.todos.map((todo) => {
                return (
                    <Todo todo={todo} changeDoneBoleen={props.changeDoneBoleen} key={todo.id} deleteTodos={props.deleteTodos}
                        editTodo={props.editTodo} />
                )
            })}
            {props.todos.length === 0 ? (<h3 className="no-todos">es gibt keine Aufgabe</h3>) : null}
        </div>
    )
}

export default Todos
