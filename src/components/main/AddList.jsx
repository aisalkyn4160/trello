import styled from "styled-components"
import { Button } from "../ui/Button"
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from "../../store/todoSlice";
import { useSelector } from 'react-redux';
import { ItemInp } from './ItemInp';


export const AddList = (props) => {
    const dispatch = useDispatch()
    const count = useSelector(state => state.todo.count)
    const todos = useSelector(state => state.todo.todos)

    const [textArea, setTextArea] = useState('')

    const addItemHandler = (e) => {
        e.preventDefault()
        dispatch(addItem(textArea))
        setTextArea('')

    }
    return (
        <>
            {count > 0 &&
                todos.map((todo) => (
                    <ItemInp  key = {todo.id} id = {todo.id} text ={todo.text} />
                )) 
            }
        
            <form onSubmit={addItemHandler}>
                <Textarea name="" id="" cols="5" rows="5" placeholder="Веести заголовок для этой карточки" onChange = {e => setTextArea(e.target.value)}></Textarea>
                <Button>Добавить карточку</Button>
                <span> x </span>
            </form>
         </>
    )
}

const Textarea = styled.textarea`
    width: 100%;
    margin-bottom: 10px;
    padding: 5px;
    outline: none;
    border: none;
    border-radius: 3px;
    border-bottom: 1px solid lightgrey;
    resize: none;
    color: grey;

`