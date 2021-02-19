import styled from "styled-components";
import px2vw from "../../utils/px2vw";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: ${px2vw(32)};
  max-width: 100%;

  @media (min-width: 1024px) {
    flex-wrap: wrap;
  }
`;

export const Box = styled.div`
  display: flex;

  width: 345px;
  height: 345px;
  flex-direction: column;
  padding: 0;
  margin: ${px2vw(20)};
  background-color: #424242;
  color: white;

  @media (min-width: 768px) {
  }

  @media (min-width: 1024px) {
    margin: ${px2vw(10)};
  }
`;
export const BoxImage = styled.div`
  img{
    width: 100%;
    height: 170px;
    display: block;
    text-align: inherit;
  }
`;

export const BoxInfo = styled.div `
  margin: 10px;
`;

export const BoxTitle = styled.h3`
  color: #333;
  font-size: 2rem;
  text-align: center;

  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
`;

export const BoxText = styled.p`
  margin-top: ${px2vw(20)};
  font-size: 1.5rem;
  word-wrap: break-word;
  padding: 0 ${px2vw(20)};
  @media (min-width: 1024px) {
    font-size: 1rem;
  }
`;