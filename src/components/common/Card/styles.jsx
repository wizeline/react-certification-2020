import styled from 'styled-components';

export const CardContainer = styled.div`
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%),
    0px 1px 3px 0px rgb(0 0 0 / 12%);
  width: ${(props) => (props.vertical ? '100%' : '345px')};
  min-height: ${(props) => (props.vertical ? 'auto' : '380px')};
  display: ${(props) => (props.vertical ? 'inline-flex' : 'block')};
  transition: ease 0.3s;
  border-radius: 4px;
  background-color: ${(props) =>
    (props &&
      props.theme &&
      props.theme.palette &&
      props.theme.palette.secondary.light) ||
    '#fff'};
  cursor: pointer;
  &:hover {
    background-color: ${(props) =>
      (props && props.theme && props.theme.palette && props.theme.palette.accent) ||
      '#fafafa'};
  }
`;

export const CardImage = styled.div`
  border-radius: 4px 4px 0 0;
  width: ${(props) => (props.vertical ? '120px' : '100%')};
  height: ${(props) => (props.vertical ? '90px' : '140px')};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${(props) => props.image});
`;

export const CardInnerContainer = styled.div`
  padding: ${(props) => (props.vertical ? '8px' : '16px')};
  width: ${(props) => (props.vertical ? 'calc(100% - 120px)' : '100%')};
`;

export const CardTitle = styled.h2`
  color: ${(props) =>
    (props &&
      props.theme &&
      props.theme.typography &&
      props.theme.typography.title.color) ||
    '#000'};
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 1.6;
  letter-spacing: 0.0075em;
  margin-bottom: 0.35em;
  margin-block-start: ${(props) => (props.vertical ? '0' : '0.83em')};
  margin-block-end: ${(props) => (props.vertical ? '0' : '0.83em')};
`;

export const CardDescription = styled.p`
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.43;
  letter-spacing: 0.01071em;
  overflow-wrap: break-word;
  color: ${(props) =>
    (props &&
      props.theme &&
      props.theme.typography &&
      props.theme.typography.title.color) ||
    '#000'};
  display: ${(props) => (props.vertical ? 'none' : 'block')};
`;
