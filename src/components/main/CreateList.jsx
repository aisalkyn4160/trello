import { Button } from "../ui/Button"
import { Card } from "../ui/Card"
import styled from "styled-components"
import { useSelector, useDispatch } from 'react-redux';
import { addTodo } from "../../store/titleTodoSlice";
import { useState } from "react";
import ListItem from './ListItem';
import { AddCardBtn } from "../ui/AddCardBtn";

export const CreateList = () => {
    const count = useSelector(state => state.ttlTodo.count)
    const todos = useSelector(state => state.ttlTodo.todos)
    const dispatch = useDispatch()

    const [inp, setInp] = useState('')

    const addTodoHandle = (e) => {
        e.preventDefault();
        dispatch(addTodo(inp))
    }


    return (
        <Card>
            {count === 0 &&
                <form onSubmit={addTodoHandle}>
                    <TtlInp type="text" name="" id="" placeholder="Ввести заголовок списка" onChange={e => setInp(e.target.value)} />
                    <Button>Добавить список</Button>
                    <span> x </span>
                </form>}


            <div>
                {count > 0 &&
                    todos.map((todo) => (
                        <ListItem key={todo.id} text={todo.text} id={todo.id} />
                    ))  
                }
        </div>


        </Card >
    )
}


const TtlInp = styled.input`
    width: 100%;
    margin-bottom: 10px;
    padding: 5px;
    outline: none;
    border: 2px solid #0079bf;
`