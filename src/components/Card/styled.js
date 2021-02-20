import styled from 'styled-components';

const Container = styled.div`
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14),
    0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  overflow: hidden;
  border-radius: 4px;
  color: rgba(0, 0, 0, 0.87);
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  background-color: #fff;
  width: 345px;
  height: 345px;
  margin: 10px;
`;

const Title = styled.h4`
  text-transform: uppercase;
  transition: all 0.4s ease;
  ${Container}:hover & {
    font-size: 1.7em;
  }
`;

const Styled = { Container, Title };
export default Styled;
