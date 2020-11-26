import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 50%;
  min-width: 320px;
  margin-bottom: 16px;
`;

export const Input = styled.input`
  width: 100%;
  min-width: 320px;
  border-radius: 16px;
  font-size: 2rem;
  padding-left: 8px;
  border-color: #003049;
  margin: 16px 0;
  &:focus {
    outline: none;
  }
  &:hover {
    border-color: #fcbf49;
  }
`;

export const Button = styled.button`
  width: 160px;
  height: 24px;
  border-radius: 16px;
  background-color: #003049;
  color: white;
  border: none;
  box-shadow:0px 4px 8px 0px rgba(0, 0, 0, 0.40);
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: #f77f00;
  }
`;