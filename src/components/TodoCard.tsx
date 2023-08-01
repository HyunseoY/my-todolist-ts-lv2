import Check from 'img/Check.png';
import Delete from 'img/Delete.png';
import Detail from 'img/Detail.png';
import nonChecked from 'img/nonChecked.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteTodo, updateTodo } from 'redux/modules/todos';
import { styled } from 'styled-components';

function TodoCard({ isDone }) {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);

  const onClickDeleteBtn = (id) => {
    const confirmDelete = window.confirm('정말 삭제하시겠습니까?');
    if (confirmDelete) {
      dispatch(deleteTodo(id));
    }
  };

  const onClickUpdateBtn = (id) => {
    dispatch(updateTodo(id));
  };

  return (
    <>
      <StH2>{isDone ? 'DONE' : 'WORKING'}</StH2>
      {todos
        .filter((item) => isDone === item.isDone)
        .map((item) => {
          return (
            <StDiv key={item.id}>
              <StUpdateBtn onClick={() => onClickUpdateBtn(item.id)}>
                {isDone ? (
                  <StUpdateImg src={Check} alt="완료버튼" />
                ) : (
                  <StUpdateImg src={nonChecked} alt="취소버튼" />
                )}
                <StButtonLabel>{isDone ? '취소' : '완료'}</StButtonLabel>
              </StUpdateBtn>

              <StSpan>
                <StTitle>{item.title}</StTitle>
                <StP>{item.contents}</StP>
              </StSpan>

              <StBtns>
                <Link to={`/detail/${item.id}`}>
                  <StImg src={Detail} alt="상세보기" />
                </Link>
                <StDeleteBtn onClick={() => onClickDeleteBtn(item.id)}>
                  <StImg src={Delete} alt="삭제버튼" />
                </StDeleteBtn>
              </StBtns>
            </StDiv>
          );
        })}
    </>
  );
}

export default TodoCard;

const StDiv = styled.div`
  background-color: white;
  padding: 20px;
  display: flex;
  border-top: 0.1em solid lightgray;
  align-items: center;
`;

const StH2 = styled.h2`
  background-color: #72a6fa71;
  margin: 0 auto;
  padding: 20px;
  color: #fafafa;
  font-weight: bold;
  text-shadow: 2px 2px 6px lightgray;
`;

const StSpan = styled.span`
  margin-left: 20px;
  margin-right: 20px;
  line-height: 25px;
`;

const StTitle = styled.p`
  background-color: white;
  color: #424141;
  font-weight: bold;
  font-size: 18px;
`;

const StP = styled.p`
  background-color: white;
  color: #424141;
  opacity: 0.7;
`;

const StUpdateBtn = styled.button`
  cursor: pointer;
  background-color: white;
  color: #424141;
  border: none;
  position: relative;
`;

const StUpdateImg = styled.img`
  width: 30px;
  height: 30px;
  left: -5px;
`;

const StButtonLabel = styled.span`
  position: absolute;
  left: 50%;
  top: -20px;
  width: 45px;
  height: 60px;
  transform: translateX(-50%);
  font-size: 12px;
  opacity: 0;
  transition: opacity 0.3s;
  &:hover {
    opacity: 1;
    background: none;
    font-size: 12px;
  }
`;

const StBtns = styled.div`
  background-color: white;
  margin-left: auto;
  gap: 10px;
`;

const StDeleteBtn = styled.button`
  background-color: white;
  color: #424141;
  margin-left: 5px;
  border: none;
  cursor: pointer;
`;

const StImg = styled.img`
  background-color: white;
  width: 20px;
  height: 20px;
`;
