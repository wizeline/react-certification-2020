import styled from 'styled-components';
import { White } from '../../constants/Colors';

const LayoutGeneral = styled.div`
  display: flex;
  background-color: ${White};
  width: 100%;
  height: auto;
  flex-direction: column;
  align-items: center;
  & > Link {
    color: red;
  }
`;

export { LayoutGeneral };
/* .container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -3rem;
} */
