import { Fragment } from "react"
import styled from "styled-components"
import Icon from '../../assets/icons/search.svg'

const Header = styled.header`  
    background-color: black;
    color: white;
    padding: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    && ul{
        list-style: none;
        display: flex;
    }

    && ul li:nth-child(2)::after,
    ul li:nth-child(3)::after,
    ul li:nth-child(4)::after{
        content: '^';
        display: inline-block;
        transform: rotate(180deg);
        font-weight: 700;
        padding-right: 5px;
    }
    && ul li {
        padding: 0 12px;
    }
    && ul li img{
        width: 75px;
    }

    && div {
        background-color: grey;
        border: 1px solid #a09898;
        border-radius: 5px;
        padding: 7px;
        height: 32px;
        width: 200px;
        display: flex;
        align-items: center;
        gap: 10px;
    }

    && div input {
        background-color: transparent;
        outline: none;
        border: none;
        

    }

    && div input::placeholder{
        color: white;
    }
    && div img{
        width: 12px;
    }
`

export const MainHeader = () => {
    return (
        <Fragment>
            <Header>
                <ul>
                    <li><img src="https://a.trellocdn.com/prgb/assets/d947df93bc055849898e.gif" alt="logo" /></li>
                    <li>Рабочее пространство</li>
                    <li>Недавние</li>
                    <li>Больше</li>
                    <li>Создать</li>
                </ul>
                <div>
                    <img src={Icon} alt="loupe" />
                    <input type="search" placeholder="Поиск" />
                </div>

            </Header>
        </Fragment>
    )
}

