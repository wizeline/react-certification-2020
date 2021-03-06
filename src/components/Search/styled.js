import styled from "styled-components";

const Search = styled.div`
    display: flex;
    margin-left: 0;
    margin-right: 16px;
    border-radius: 4px;

    .icon { 
        display: flex;
        padding: 10px 16px;
        position: absolute;
        align-items: center;
        pointer-events: none;
        justify-content: center;
    }
    input {
        color: #fff;
        width: 100%;
        padding: 8px 8px 8px 0px;
        transition: width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        padding-left: calc(1em + 32px);
        background-color: rgba(255, 255, 255, 0.15);
        font-size: 1rem;
        border: 0;
        border-radius: 4px;
        ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
            color: rgba(255,255,255,0.50);
            opacity: 1; /* Firefox */
        }

        :-ms-input-placeholder { /* Internet Explorer 10-11 */
            color: #fff;
        }

        ::-ms-input-placeholder { /* Microsoft Edge */
            color: #fff;
        }
        :focus {
            outline: none;
        }
        :hover {
            background-color: rgba(255, 255, 255, 0.25);
        }
    }
`;


const Styled = { Search };

export default Styled;