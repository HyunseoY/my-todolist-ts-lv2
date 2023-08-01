import { nonCheckedImg } from 'images';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from 'redux/modules/todos';
import { styled } from 'styled-components';

function Form() {
  // 인풋 관련
  const INIT_VALUE = { title: '', contents: '', id: Date.now(), isDone: false };
  const [todo, setTodo] = useState(INIT_VALUE);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTodo({ ...todo, [name]: value });
  };

  // 투두 추가 관련
  const dispatch = useDispatch();

  const onSubmitAddHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todo.title === '' || todo.contents === '') return;

    dispatch(addTodo(todo));
    setTodo(INIT_VALUE);
  };

  return (
    <StForm onSubmit={onSubmitAddHandler}>
      <StDiv>
        <StImg src={nonCheckedImg} alt="체크" />
        <StInput
          type="text"
          placeholder="제목을 입력하세요"
          name="title"
          value={todo.title}
          onChange={onChangeHandler}
          required
        />
        <StSpan />
      </StDiv>
      <StDiv>
        <StInput
          type="text"
          placeholder="할 일을 입력하세요"
          name="contents"
          value={todo.contents}
          onChange={onChangeHandler}
          required
        />
        <StSpan />
      </StDiv>
      <StButton type="submit">Add</StButton>
    </StForm>
  );
}

export default Form;

const StImg = styled.img`
  border-radius: 50%;
  border: none;
  width: 30px;
  height: 30px;
  position: absolute;
  top: -5px;
  left: -43px;
`;

const StForm = styled.form`
  background: none;
  margin: 10px;
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  width: 800px;
  display: flex;
`;

const StDiv = styled.div`
  position: relative;
  width: 300px;
  margin-left: 50px;
  margin-top: 10px;
`;

const StInput = styled.input`
  font-size: 15px;
  color: #222222;
  width: 300px;
  border: none;
  border-bottom: solid #aaaaaa 1px;
  padding-bottom: 10px;
  padding-left: 10px;
  position: relative;
  background: none;
  background-color: white;
  z-index: 5;
  &:focus {
    outline: none;
    ~ span {
      width: 104%;
    }
    &::placeholder {
      color: #aaaaaa;
    }
  }
`;

const StSpan = styled.span`
  display: block;
  position: absolute;
  bottom: 0;
  left: 0%; /* right로만 바꿔주면 오 - 왼 */
  background-color: #b962ef96;
  width: 0;
  height: 2px;
  border-radius: 2px;
  transition: 0.5s;
`;

const StButton = styled.button`
  height: 40px;
  width: 50px;
  color: #424141;
  margin-left: 40px;
  border: 0.1rem solid #72a6fa71;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    border: none;
    box-shadow: 0 0 15px 5px #72a6fa71;
  }
`;
