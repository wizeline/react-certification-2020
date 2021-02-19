import { createGlobalStyle } from 'styled-components';
import px2vw from "../src/utils/px2vw";

export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root {
      font-size: ${px2vw(24)};

      @media (min-width: 768px) {
        font-size: ${px2vw(18)};
      }

      @media (min-width: 1024px) {
        font-size: ${px2vw(16)};
      }
    }
  h2.welcome {
    font-size: 3.75rem;
    font-weight: 300;
    line-height: 1.2;
    letter-spacing: -0.00833em;
    padding-top: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default Global;