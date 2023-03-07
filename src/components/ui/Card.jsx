import styled from "styled-components";

const CARD = styled.div`
    width: 250px;
    background-color: #ebecf0;
    border-radius: 3px;
    padding: 5px;
`

export const Card = (props) => {
    return <CARD>{props.children}</CARD>
} 