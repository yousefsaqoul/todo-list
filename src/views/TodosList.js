import React, { useState } from 'react'
import Todos from '../components/todos/Todos'
import TodosFrom from '../components/todos/TodosForm'
const TodosList = () => {
    const initialState = [
        { id: 1, title: "Home Work", done: false },
        { id: 2, title: "React Study", done: true },
        { id: 3, title: "Build an application", done: false },
        { id: 4, title: "Watch a lesson on YouTube", done: true },
    ]
    const [todos, setTodos] = useState(initialState)


    const [activeTodo, setActiveTodo] = useState({})
    const [mode, setMode] = useState('add')

    // hier für zeigen die todos die nicht false ist 

    const changeDoneBoleen = (id) => {
        const copyTodos = [...todos]
        const newTodos = copyTodos.map((ele) => {
            if (ele.id === id) {
                ele.done = !ele.done;
                return ele;
            } return ele;
        });
        setTodos(newTodos)
    };

    const deleteTodos = (id) => {
        const copyTodos = [...todos]
        const newTodos = copyTodos.filter((ele) => ele.id !== id
        )
        setTodos(newTodos)
    }
    const addTodoHandler = (title) => {
        if (mode !== 'edit') {
            const newTodo = {
                id: Date.now(),
                title: title,
                done: false,
            }
            const addNewTodo = [...todos, newTodo]
            setTodos(addNewTodo)

        } else {
            const currentTodo = [...todos]
            const newTodos = currentTodo.map((ele) => {
                if (ele.id === activeTodo.id) {
                    ele.title = title
                    return ele;
                } return ele;
            })
            setTodos(newTodos)
            setActiveTodo({})
            setMode('add')
        }

    }


    const showUncompleteHandler = () => {
        if (mode === 'not-done') {
            setMode('add')
        } else { setMode('not-done') }
    }
    let currentTodo = [...todos]
    if (mode === 'not-done') {
        currentTodo = currentTodo.filter((todo) => !todo.done)
    }

    const editTodo = (todo) => {
        setMode('edit')
        setActiveTodo(todo)
    }




    return (
        <main>
            <div className="container">
                <div className="todos">
                    <TodosFrom addTodoHandler={addTodoHandler} showUncompleteHandler={showUncompleteHandler} todos={mode !== 'edit' ? currentTodo : [activeTodo]} mode={mode} />
                    <Todos todos={mode !== 'edit' ? currentTodo : [activeTodo]} changeDoneBoleen={changeDoneBoleen} deleteTodos={deleteTodos} editTodo={editTodo} />

                </div>

            </div>
        </main>
    )
}

export default TodosList
