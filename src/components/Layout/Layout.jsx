import Navbar from "../Navbar/NavBar.jsx"
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