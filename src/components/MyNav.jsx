import { Navbar, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"


const MyNav = ()=> { 
    return (
    <Navbar onClick={(e) => console.log('clicked!', e)} collapseOnSelect expand="md" bg="light" variant="light">
    <Link to="/" className='navbar-brand'>BookStore</Link>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
            <Link href="#features" to="/"className='nav-link'>Home</Link>
            <Link href="#pricing" to='/error'className='nav-link'>About</Link>
            <Link href="#pricing" to='/register' className='nav-link'>Registration</Link>
        </Nav>
    </Navbar.Collapse>
    </Navbar>
)
}

export default MyNav