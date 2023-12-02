import styled from 'styled-components';

export const Container = styled.div`
  width: 500px;
  margin: 0px auto;
  align-items: center;
`;

export const Label = styled.label`
  width: 400px;
  justify-content: space-between;
  align-items: center;
  display: flex;
  padding: 10px 12px;
`;
export const InputStyle = styled.input`
  height: 25px;
  padding: 4px;
  width: 200px;
  border: 2px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;
  cursor: pointer;
  font-size: 15px;

  &:hover,
  &:focus {
    border-color: #008000;
    outline: none;
  }
`;

export const ButtonStyle = styled.button`
  height: 30px;
  width: 100px;
  padding: 4px;
  font-weight: 500px;
  border: none;
  border-radius: 5px;
  background-color: #fff;
  margin:0 auto;
  
  &:hover {
    background-color: #008000;
    color: #fff;
  }
`;
export const TitleStyle = styled.h3`
  color: #fff; 
  font-size: 14px; 
`