import styled from 'styled-components';

export const ToggleWrapper = styled.label`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
  margin-right: 16px;
`;

export const SwitchHandleWrapper = styled.span`
  width: 58px;
  height: 38px;
  display: inline-flex;
  padding: 12px;
  z-index: 0;
  overflow: hidden;
  box-sizing: border-box;
  flex-shrink: 0;
  vertical-align: middle;
`;

export const SwitchWrapper = styled.span`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const CheckBox = styled.input.attrs({ type: 'checkbox' })`
  opacity: 0;
  width: 0;
  height: 0;
  margin: 0;
`;

export const Circle = styled.span`
  width: 20px;
  height: 20px;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%),
    0px 1px 3px 0px rgb(0 0 0 / 12%);
  border-radius: 50%;
  background-color: ${(props) => props.theme.palette.accent};
  transform: translateX(${(props) => (props.checked ? '100%' : '0')});
  transition: ease 0.3s;
`;

export const Handle = styled.span`
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 7px;
  background-color: rgba(0, 0, 0, 0.38);
`;
