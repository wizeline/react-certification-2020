import styled from "styled-components";
import px2vw from "../../utils/px2vw";

export const Box = styled.div`
  display: flex;

  width: 345px;
  height: 345px;
  flex-direction: column;
  padding: 0;
  margin: ${px2vw(20)};
  background-color: #424242;
  color: white;
  a {
    color: white;
    :link {
      text-decoration: none;
    }

    :visited {
      text-decoration: none;
    }

    :hover {
      text-decoration: none;
    }

    :active {
      text-decoration: none;
    }
  }
  @media (min-width: 768px) {
  }

  @media (min-width: 1024px) {
    margin: ${px2vw(10)};
  }
`;
export const BoxImage = styled.div`
  img{
    width: 100%;
    height: 140px;
    display: block;
    text-align: inherit;
  }
`;

export const BoxInfo = styled.div `
  padding: 16px;
`;

export const BoxTitle = styled.h2`
  color: #fff;
  font-size: 1.25rem;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 500;
  line-height: 1.6;
  letter-spacing: 0.0075em;

  @media (min-width: 1024px) {
  }
`;

export const BoxText = styled.p`
  margin-top: 0.35em;
  word-wrap: break-word;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.875rem;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 400;
  line-height: 1.43;
  letter-spacing: 0.01071em;
  @media (min-width: 1024px) {
  }
`;

export const BoxSide = styled.div`
  a {
    color: white;
    height: 100px;
    display: flex;
    flex-direction: row;
    :link {
      text-decoration: none;
    }

    :visited {
      text-decoration: none;
    }

    :hover {
      text-decoration: none;
    }

    :active {
      text-decoration: none;
    }
  }
`;
export const BoxImageSide = styled.img`
    width: 120px;
    height: 90px;
    position: relative;
    display: flex;
    flex-direction: column;
`;

export const BoxInfoSide = styled.div `
  height: 100%;
  padding: 5px;
  box-sizing: border-box;
`;

export const BoxTitleSide = styled.p`
  font-size: 1rem;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.00938em;
`;