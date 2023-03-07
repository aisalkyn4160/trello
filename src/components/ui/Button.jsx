import styled from "styled-components"

const Btn = styled.button `
    background-color: #0079bf;
    padding: 5px 10px;
    border-radius: 3px;
    text-align: center;
    color: white;
    border: none;
    cursor: pointer;

    &&:hover{
        background-color:#016aa7;
    }
`
export const Button = (props) => {
    return <Btn>{props.children}</Btn>
}