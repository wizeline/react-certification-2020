import styled from 'styled-components';

export const HomeContainer = styled.section``;

export const HomeTitle = styled.h1`
  font-size: 3.4rem;
  font-weight: 300;
  font-family: 'Roboto', sans-serif;
  line-height: 1.2;
  letter-spacing: 0.01071em;
  margin-block-start: 0.5em;
  margin-block-end: 0.65em;
  color: ${(props) => props.theme.typography.title.color};
  text-align: center;
`;

export const ContentContainer = styled.div`
  width: calc(100% - 64px);
  padding: 12px 0;
  display: flex;
  flex-flow: row wrap;
  margin: 0 auto;
  justify-content: center;
  row-gap: 20px;
  @media screen and (min-width: 600px) {
    column-gap: 20px;
  }
  @media screen and (min-width: 769px) {
    row-gap: 15px;
  }
`;
