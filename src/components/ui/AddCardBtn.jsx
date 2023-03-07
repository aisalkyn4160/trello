import styled from "styled-components"


export const AddCardBtn = () => {
    return <ListBtn> Добавить карту</ListBtn>
}


const ListBtn = styled.button`
        position: relative;
        width: 100%; 
        padding: 10px;
        padding-left: 30px;
        color: #aaa5a5;
        outline: none;
        cursor: pointer;
        border: none;
        text-align: left;
        background-color: transparent;

    &&::before{
        content: '+';
        font-size: 25px;
        display: inline-block;
        position: absolute;
        top: 3px;
        left: 10px;
    }

     &&:hover{
        background-color: rgba(185, 180, 180, 0.5);
        color: grey;
     }
`
