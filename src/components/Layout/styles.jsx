import styled from 'styled-components';

export const MainContainer = styled.main`
  width: 100vw;
  min-height: calc(100vh - 64px);
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.palette.secondary.main};
`;
