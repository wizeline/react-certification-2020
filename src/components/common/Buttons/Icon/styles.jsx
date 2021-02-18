import styled from 'styled-components';

export const ButtonWrapper = styled.button`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: ease-in-out 0.2s;
  background-color: transparent;
  border: none;
  &.menu {
    margin-right: 16px;
  }
  &.bigger {
    height: ${(props) => props.theme.appBar.height.desktop};
    width: ${(props) => props.theme.appBar.height.desktop};
  }
  &:hover {
    background-color: rgba(${(props) => props.theme.palette.primary.transparent});
  }
  &:focus {
    outline: none;
  }
  &:active {
    background-color: rgba(255, 255, 255, 0.4);
  }
  @media screen and (min-width: 600px) {
    height: 32px;
    width: 32px;
  }
`;

export const Icon = styled.div`
  height: 1.25rem;
  width: 1.25rem;
  background-image: url(${(props) => props.image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  &.bigger {
    height: 40px;
    width: 40px;
  }
  svg {
    path {
      fill: ${(props) => props.theme.profile.secondary};
    }
    path:not(:first-of-type) {
      fill: ${(props) => props.theme.profile.primary};
    }
  }
  @media screen and (min-width: 600px) {
    height: 1rem;
    width: 1rem;
  }
`;
