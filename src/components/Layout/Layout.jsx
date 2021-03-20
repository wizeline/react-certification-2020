import Navbar from "../Navbar/Navbar"
import Wrapper from "../Wrapper/Wrapper"

const Layout = ({ children }) => {
    return (
        <>
        <Navbar />
        <Wrapper>{children}</Wrapper>
        </>
    )
}

export default Layout