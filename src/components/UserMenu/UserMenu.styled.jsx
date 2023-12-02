import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Text = styled.p`
  font-weight: 700;
  color: black;
  font-size: 20px;
`;

export const Button = styled.button`
  padding: 3px 3px;
  font: inherit;
  cursor: pointer;
  border-radius: 5px;
  border: 1px solid #008000;
  color: black;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 10px;
  background-color: #fff;

  &:hover {
    background-color:#008000 ;
    color: white;
  }
`;
