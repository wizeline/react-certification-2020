import styled from "styled-components";
import px2vw from "../../utils/px2vw";


export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: ${px2vw(13)};
  max-width: 100%;
  flex-direction: row;
  color: #fff;
  background-color: #556cd6;
  min-height: 64px;

  @media (min-width: 1024px) {
    flex-wrap: wrap;
  }
`;

export const Box = styled.div`
  display: flex;
  width: ${px2vw(320, 320)};
  min-height: ${px2vw(200, 320)};
  flex-direction: column;
  padding: ${px2vw(20)};
  margin: ${px2vw(20)};
  background-color: ${props => props.bgColor};
  border:  2px solid red;
  height: 100%;

  @media (min-width: 768px) {
    width: ${px2vw(320, 768)};
    min-height: ${px2vw(200, 768)};
    height: 100px;
  }

  @media (min-width: 1024px) {
    width: ${px2vw(320, 1440)};
    min-height: ${px2vw(300)};
    margin: ${px2vw(10)};
    height: 100px;
  }
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
  color: #666;
  font-size: 1.5rem;

  @media (min-width: 1024px) {
    font-size: 1rem;
  }
`;