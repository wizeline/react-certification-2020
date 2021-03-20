import styled from 'styled-components';
import { DarkRed, GrayLight } from '../../constants/Colors';

const HeaderGeneral = styled.div`
  display: flex;
  flex-direction: row;
  background-color:${DarkRed};
  justify-content: space-between;
  align-content: center;
  width: 100%;
  height: 5%;
`

const LogSec = styled.div`
  display: flex;
  width: 30%;
  padding: 2%;
  flex-direction: row;
  justify-content:space-around;
  align-items: center;
  &>div{
    display:flex;
    justify-content: space-evenly;
    width: 60%;
    flex-direction: row;
    &>h5{
      color: white;
    }
  }
`

const SearchSec = styled.div`
  width: 40%;
  height: auto;
  padding: 2%;
  align-items:center ;
  justify-content: flex-start;
  flex-direction: row;
  display: flex;
`

export { HeaderGeneral, SearchSec, LogSec}