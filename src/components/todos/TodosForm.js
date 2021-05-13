import React, { useState } from 'react'
import FeatherIcon from 'feather-icons-react';
const TodosForm = (props) => {
    const [newTitle, setNewTitle] = useState('')
    const [editRender, setEditRender] = useState(false)
    if (props.mode === 'edit' && !editRender) {
        setNewTitle(props.todos[0].title)
        setEditRender(true)
    }


    const sendNewTitle = (event) => {
        setNewTitle(event.target.value)
    }
    const addNewTitleHandler = () => {
        const nTitle = newTitle;
        setNewTitle('');
        setEditRender(false)
        return props.addTodoHandler(nTitle)
    }
    let btnString = 'add..'
    if (props.mode === 'edit') {
        btnString = 'Edit'
    }

    return (
        <div className="todos-form">
            <div className="todos-form_icon" onClick={props.showUncompleteHandler} >
                <FeatherIcon icon="filter" size="20" />
            </div>
            <div className="todos-form_form" >
                <input type="text" value={newTitle} placeholder="Add New Todo ..." onChange={sendNewTitle} />
            </div>
            <div className="todos-form_submit" >
                <button className="btn" onClick={addNewTitleHandler} disabled={newTitle.trim() ? false : true}>{btnString}</button>
            </div>



        </div>
    )
}

export default TodosForm
