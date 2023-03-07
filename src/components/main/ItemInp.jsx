import styled from "styled-components"
import Icon from '../../assets/icons/pen.png'

export const ItemInp = (props) => {
    return(
        <Div>
            <Inp type="text" value={props.text} />
            <Span></Span>
        </Div>
    ) 
}


const Div = styled.div`
    display: flex;
    align-items: center;
    position: relative;

    && :hover{
        background-color: #f8f8f8;
        
    }
`
const Inp = styled.input`
    outline: none;
    border: none;
    width: 100%;
    margin-bottom: 10px;
    padding: 5px;
    border-radius: 3px;
    border-bottom: 1px solid lightgrey;
    color: grey;
    position: relative;

    /* &&:hover{
        background-color: #f8f8f8;
    } */

`
const Span = styled.span`
    display: inline-block;
    width:  20px;
    height: 20px;
    background-color: transparent;
    position: absolute;
    top: 2px;
    right: 5px;

`