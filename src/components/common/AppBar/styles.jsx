import styled from 'styled-components';

export const Header = styled.header`
  color: #fff;
  background-color: ${(props) => props.theme.palette && props.theme.palette.primary.main};
  width: 100%;
  display: flex;
  z-index: 1100;
  box-sizing: border-box;
  flex-shrink: 0;
  flex-direction: column;
`;

export const AppBarWrapper = styled.div`
  min-height: ${(props) => props.theme.appBar && props.theme.appBar.height.desktop};
  padding: 0 24px;
  display: flex;
  align-items: center;
`;

export const RightWrapper = styled.div`
  margin-left: auto;
  align-items: center;
  display: none;
  @media screen and (min-width: 600px) {
    display: inline-flex;
  }
`;
