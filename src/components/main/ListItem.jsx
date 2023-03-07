import { AddCardBtn } from "../ui/AddCardBtn";
import styled from 'styled-components';
import Icon from '../../assets/icons/shablon.png'
import { useDispatch } from 'react-redux';
import { addItem} from "../../store/todoSlice";
import { useSelector } from 'react-redux';
import { AddList } from "./AddList";


const ListItem = (props) => {
    const dispatch = useDispatch()
    const isShow = useSelector(state => state.todo.isShow)
    console.log(isShow);

    const addCardHandle = () => {
        dispatch(addItem())
    }
    // const deleteTodo = () => {
    //     props.onCheck(props.id);
    // };
    return (
        <div >
            <TtlDiv>
                <h3>{props.text}</h3>
                <b>...</b>
            </TtlDiv>

            {!isShow && <AddList />}

            {isShow &&
                <TtlDiv>
                    <AddCardBtn onClick={addCardHandle} />
                    <img src={Icon} alt="" />
                </TtlDiv>
            }


        </div>
    );
};

const TtlDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: grey;

    && img{
        width: 20px;

    }
`

export default ListItem;