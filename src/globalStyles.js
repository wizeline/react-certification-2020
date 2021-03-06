import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background-color: #303030;
  }
  h2.welcome {
    padding-top: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3.75rem;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 300;
    line-height: 1.2;
    letter-spacing: -0.00833em;
    color: white;
  }
  main {
    background-color: #303030;
  }
  .detailPage {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    .rigthSide {
      width: 70%;
      height: 100%;
      position: relative;
      display: flex;
      flex-direction: column;
    }
    .leftSide {
      width: 30%;
      height: 100%;
      overflow: scroll;
    }
  }
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 16px;
    max-width: 100%;

    @media (min-width: 1024px) {
      flex-wrap: wrap;
    }
  }
  .youtubeFrame {
    border-width: 2px;
    border-style: inset;
    border-color: initial;
    border-image: initial;
  }
`;

export default Global;