import styled from 'styled-components'

const AppName = styled.h1`
    color: black;
    margin-left: 2px;
    font-size: 2.5em;
    font-weight: bold;
`


export default function Title() {
    return (
        <AppName>DuTube</AppName>
    )
}
