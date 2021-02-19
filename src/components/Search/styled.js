import styled from "styled-components";

const Search = styled.div`
    display: flex;
    margin-left: 0;
    margin-right: 16px;
    border-radius: 4px;
    background-color: rgba(255, 255, 255, 0.15);
    input {
        width: 100%;
        padding: 8px 8px 8px 0px;
        transition: width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        padding-left: calc(1em + 32px);
    }
`;


const Styled = { Search };

export default Styled;