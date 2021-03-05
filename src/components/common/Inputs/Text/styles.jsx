import styled from 'styled-components';
import SearchIcon from '../../../../assets/search.svg';

export const InputWrapper = styled.div`
  display: inline-flex;
  font-size: 1rem;
  padding: 8px;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.2);
  color: white;
  transition: ease-in-out 0.2s;
  align-items: center;
  margin-left: 24px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.4);
  }
`;

export const IconWrapper = styled.div`
  width: 1rem;
  height: 1rem;
  margin: 0 8px;
  background-image: url(${SearchIcon});
`;

export const Input = styled.input`
  border: none;
  background-color: transparent;
  color: inherit;
  font-size: 0.875rem;
  height: 1.1876em;

  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
  &:focus {
    outline: none;
  }
`;
