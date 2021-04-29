import styled from "styled-components";

export const ButtonContainer = styled.div`
    width: 40px;
    height: 40px;
    display: none;
    overflow: hidden;
    position: relative;
    font-size: 1.25rem;
    align-items: center;
    flex-shrink: 0;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    line-height: 1;
    user-select: none;
    border-radius: 50%;
    justify-content: center;

  @media (min-width: 1024px) {
    display: flex;
  }
  img {
    color: transparent;
    width: 100%;
    height: 100%;
    object-fit: cover;
    text-align: center;
    text-indent: 10000px;
  }
`;

export const Label = styled.label`
    width: 58px;
    height: 38px;
    display: inline-flex;
    padding: 12px;
    z-index: 0;
    overflow: hidden;
    position: relative;
    box-sizing: border-box;
    flex-shrink: 0;
    vertical-align: middle;
    margin-right: -12px;
    
    .switch {
        position: relative;
        display: inline-block;
        width: 60px;
        height: 34px;
    }
    .input { 
        opacity: 0;
        width: 0;
        height: 0;
    }
`;