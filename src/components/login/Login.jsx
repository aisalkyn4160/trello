import { Fragment } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import styled from "styled-components"
import { Button } from "../ui/Button"
import { authSliceActions } from './../../store/authSlice'

const initState = {
    email: 'some@gmail.com',
    pass: 123
}

export const Login = () => {
    const dispatch = useDispatch()
    const email = useSelector(state => state.auth.email)
    console.log(email);
    const error = useSelector(state => state.auth.error)
    const pass = useSelector(state => state.auth.pass)
    const [emailInp, setEmailInp] = useState('')
    
    const emailChangeHandler = (e) => {
        setEmailInp(e.target.value === email)
    }

    
    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(authSliceActions.login())
    }
    return (
        <Fragment>
            <Form onSubmit={submitHandler}>
                <h2>Вход в Trello</h2>
                {error && <p>wrohg</p>}
                <input type="email" placeholder="Укажите адрес электронной почты" onChange={emailChangeHandler} value={emailInp}/>
                <input type="password" placeholder="Введите пароль" />
                <Button>Войти</Button>
            </Form>
        </Fragment>
    )
}

const Form = styled.form`
    width: 400px;
    height: 200px;
    background-color: #ffffff;
    border-radius: 3px;
    padding: 25px 40px;
    box-shadow: rgb(0 0 0 / 10%) 0 0 10px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 40px;

    && h2{
        text-align: center;
        color: #5e6c84;
        font-size: 16px;
        margin-top: 10px;
        margin-bottom: 25px;
    }
    
    && input, button {
        outline: none;
        font-size: 14px;
        background-color: #fafbfc;
        border: 2px solid #dfe1e6;
        border-radius: 3px;
        height: 40px;
        padding: 7px;
        margin-bottom: 15px;
        transition: background-color .2s ease-in-out 0s,border-color .2s ease-in-out 0s;
    }

    && input:focus{
        background: white;
        border: 2px solid #4c9aff;
        box-shadow: 0 0 0;
    }

    && button {
        background: #5AAC44;
        border: none;
        color: white;
        font-weight: 900;
    }

    && button:hover{
        background-color: #6dbb57;
    }
`  
