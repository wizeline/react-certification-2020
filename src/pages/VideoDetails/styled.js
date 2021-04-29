import styled from "styled-components";

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  background-color: ${(props) => props.videoCardBackgroundColor};
`;

export const DetailPage = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
`;
export const Title = styled.h2`
    color: ${(props) => props.videoCardColor};
    width: 75%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
`;

export const BoxInfo = styled.div `
  padding: 16px;
`;
export const BoxText = styled.p`
  margin-top: 0.35em;
  word-wrap: break-word;
  color: ${(props) => props.videoCardColor};
  font-size: 0.875rem;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 400;
  line-height: 1.43;
  letter-spacing: 0.01071em;
  @media (min-width: 1024px) {
  }
`;

export const AddFavorite = styled.div`
    button {
      color: ${(props) => props.videoCardColor};
      padding: 6px 16px;
      font-size: 0.875rem;
      min-width: 64px;
      box-sizing: border-box;
      transition-duration: 0.4s;
      font-family: "Roboto", "Helvetica", "Arial", sans-serif;
      font-weight: 500;
      line-height: 1.75;
      border-radius: 4px;
      letter-spacing: 0.02857em;
      text-transform: uppercase;
      outline:none; 
      border: 0;
      cursor: pointer;
      text-decoration: none;
      background-color: transparent;
      -webkit-appearance: none;
      -webkit-tap-highlight-color: transparent;
    }
    button:hover {
      background-color: rgba(255, 255, 255, 0.10);
      color: ${(props) => props.videoCardColor};
      border: 0;
    }
`;