import styled from 'styled-components';
import { GrayLight, White } from '../../constants/Colors';

const LayoutGeneral = styled.div`
  display: flex;
  background-color: ${White};
  width: 100%;
  flex-direction: column;
  & > Link {
    color: red;
  }
`;
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
  width: 90%;
  margin: 0 5%;
  background-color: ${GrayLight};
  flex-wrap: wrap;
  & > div {
    text-align: center;
    border: 1px solid black;
    width: 26%;
    margin: 2%;
    border-radius: 10px;
  }
`;
export { LayoutGeneral, WelcomeSection, VideosList };
