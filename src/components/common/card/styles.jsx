import styled from 'styled-components';

export const CardContainer = styled.div`
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%),
    0px 1px 3px 0px rgb(0 0 0 / 12%);
  width: 345px;
  min-height: 360px;
  transition: ease 0.3s;
  border-radius: 4px;
  background-color: ${(props) => props.theme.palette.secondary.light};
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.palette.accent};
  }
`;

export const CardImage = styled.div`
  border-radius: 4px 4px 0 0;
  width: 100%;
  height: 140px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${(props) => props.image});
`;

export const CardInnerContainer = styled.div`
  padding: 16px;
`;

export const CardTitle = styled.h2`
  color: ${(props) => props.theme.typography.title.color};
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 1.6;
  letter-spacing: 0.0075em;
  margin-bottom: 0.35em;
`;

export const CardDescription = styled.p`
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.43;
  letter-spacing: 0.01071em;
  color: ${(props) => props.theme.typography.text.color};
`;
