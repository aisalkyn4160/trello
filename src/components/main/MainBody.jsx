import styled from 'styled-components';
// import { AddList } from './AddList';
import { CreateList } from './CreateList';
import { useDispatch, useSelector } from 'react-redux';
import { ListSliceActions } from '../../store/ListSlice';



export const MainBody = () => {
    const dispatch = useDispatch()

    const isAddedList = useSelector(state => state.list.isAddedList)
    console.log(isAddedList);

    const addListHandler = () => {
        dispatch(ListSliceActions.add())
    }

    return (
        <Main>
            {isAddedList &&  <CreateList/>}
            <ListBtn onClick={addListHandler}>Добавить еще одну колонку</ListBtn>
        </Main>
    )
}

const Main = styled.main`
    background-image: url(https://www.indiewire.com/wp-content/uploads/2022/08/s658tbkgvp9gvfbpvpzbrp.jpg);
    background-size: cover;
    height: 100vh;
    padding: 50px;
    display: flex;
    align-items: flex-start;
    gap: 5px;
`
const ListBtn = styled.button`
        position: relative;
        min-width: 250px;
        background-color:#ffffff3d; 
        padding: 10px;
        padding-left: 30px;
        color: white;
        outline: none;
        cursor: pointer;
        border: none;
        text-align: left;

    &&::before{
        content: '+';
        font-size: 25px;
        display: inline-block;
        position: absolute;
        top: 3px;
        left: 10px;
    }

     &&:hover{
        background-color: rgba(255, 255, 255, 0.4);
     }
`