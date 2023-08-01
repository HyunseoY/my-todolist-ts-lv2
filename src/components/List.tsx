import { styled } from 'styled-components';
import TodoCard from './TodoCard';

function List() {
  return (
    <StDiv>
      <TodoCard isDone={false} />
      <TodoCard isDone={true} />
    </StDiv>
  );
}

export default List;

const StDiv = styled.div`
  background: none;
  margin: 10px;
  background-color: white;
  border-radius: 5px;
  width: 840px;
  box-shadow: 0 0 20px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;
