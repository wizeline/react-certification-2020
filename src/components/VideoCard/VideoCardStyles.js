import styled from 'styled-components';

export const VideoCardWrapper = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-bottom: 10px;
  box-shadow: 15px 15px 27px #e1e1e3;
  background-color: lavender;

  .image-wrapper {
    position: relative;
    width: 300px;
    overflow: hidden;
    background-size: cover;
    border-radius: 20px 20px 0 0;
  }

  img {
    object-fit: cover;
    object-position: top;
    display: block;
    height: 100%;
    width: 100%;
  }

  .like-icon {
    padding-right: 8px;
    height: 100%;
  }

  h2,
  p,
  a {
    margin: 10px;
    color: black;
    overflow-wrap: break-word;
    text-decoration: none;
  }

  h2 {
    font-size: 12px;
  }

  p {
    font-size: 10px;
  }
`;

export const VideoCardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const VideoCardTitle = styled.h2`
  display: flex;
`;

export const LikeButton = styled.div`
  display: flex;
  height: 20px;
`;
