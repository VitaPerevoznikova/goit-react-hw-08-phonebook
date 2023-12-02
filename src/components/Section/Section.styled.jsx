import styled from 'styled-components';

export const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: ${props => props.theme.space[4]}px;
  padding-bottom: ${props => props.theme.space[4]}px;

  max-width: 100%;
  width: 43.75rem;

  background: #fff;
  border-radius: 25px;
  text-shadow: 1px 1px 0 #fff;
  box-shadow: 2px 3px 12px 2px rgba(0, 0, 0, 0.25);
`;
