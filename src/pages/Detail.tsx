import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

function Detail() {
  const params = useParams();
  const todos = useSelector((state) => state.todos.todos);
  const navigate = useNavigate();

  const foundTodo = todos.find((item) => {
    return item.id === params.id;
  });

  return (
    <StDiv>
      <StId>ID : {foundTodo.id}</StId>
      <StTitle>{foundTodo.title}</StTitle>
      <StP>{foundTodo.contents}</StP>
      <StBtn
        onClick={() => {
          navigate('/');
        }}
      >
        이전으로
      </StBtn>
    </StDiv>
  );
}

export default Detail;

const StDiv = styled.div`
  max-width: 800px;
  min-width: 500px;
  margin: 0 auto;
  margin-top: 200px;
  display: flex;
  border: none;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 0 20px 10px rgba(0, 0, 0, 0.1);
  align-items: center; /* 수정된 부분 */
  justify-content: center; /* 수정된 부분 */
  flex-direction: column;
  color: #807e7e;
  overflow: hidden;
`;

const StId = styled.p`
  background: none;
  padding: 20px;
  margin-right: auto;
`;

const StTitle = styled.p`
  background: none;
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 10px;
`;
const StP = styled.p`
  background: none;
`;

const StBtn = styled.button`
  height: 40px;
  width: 200px;
  color: #424141;
  margin: 20px;
  border: 0.1rem solid #72a6fa71;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    border: none;
    box-shadow: 0 0 15px 5px #72a6fa71;
  }
`;
