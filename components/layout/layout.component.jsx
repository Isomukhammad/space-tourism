import Navbar from "../navbar/navbar.component";

const Layout = ({ children }) => (
    <>
        <Navbar/>
        {children}
    </>
)

export default Layout;