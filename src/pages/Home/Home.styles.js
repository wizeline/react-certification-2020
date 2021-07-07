import styled from 'styled-components';
import { DarkRed, GrayLight2, White, GrayMed } from '../../constants/Colors';

const WelcomeSection = styled.div`
  display: flex;
  justify-content: center;
  width: 90%;
  margin: 2% 5%;
  color: white;
  & > h1 {
    text-align: center;
  }
`;
const VideosList = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  width: 96%;
  margin: 5% 2%;
  background-color: ${GrayLight2};
  flex-wrap: wrap;
  & > div {
    text-align: center;
    width: 42%;
    margin: 2%;
    border-radius: 10px;
    box-shadow: 5px 2px 5px 3px #8c8c8c;
    background-color: ${White};
    padding: 2%;
    cursor: pointer;
    & > img {
      border-bottom: 1px solid ${White};
      width: 80%;
      height: auto;
      padding: 1%;
    }
    & > h3 {
      color: ${DarkRed};
      font-weight: bold;
      font-size: 1rem;
    }
    & > p {
      color: ${GrayMed};
      font-size: 0.7rem;
    }
  }
`;
export { WelcomeSection, VideosList };
