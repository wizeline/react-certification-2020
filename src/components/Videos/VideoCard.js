import styled from "styled-components";

const VideoCardHeader = styled.header`
  margin-bottom: auto;

  & p {
    font-size: 14px;
    margin: 0 0 1rem;
    color: #7a7a8c;
    max-height: 100px;
    overflow: hidden;
  }

  & h2 {
    font-size: 20px;
    margin: 0.25rem 0 auto;
    text-decoration: none;
    color: inherit;
    border: 0;
    display: inline-block;
    cursor: pointer;
  }

  & h2:hover {
    background: linear-gradient(90deg, #ff8a00, #e52e71);
    text-shadow: none;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
  }
`;

const VideoCard = styled.article`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 350px;
  width: 400px;
  min-width: 250px;
  padding: 0.5rem;
  margin: 2rem;
  border-radius: 16px;
  background: #17141d;
  box-shadow: -1rem 0 3rem #000;
`;

const VideoCardList = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 2rem;
`;

const VideoCardAuthor = styled.div`
  font-size: 32px;
`;

export { VideoCard, VideoCardHeader, VideoCardList, VideoCardAuthor };
