import {Container, Navbar} from "react-bootstrap";
import './Header.css';
import {Link} from "react-router-dom";

function Header (){
    return (
        <Navbar bg="dark">
            <Container>
                <Navbar.Brand>
                    <Link to="/list" className='link text-decoration-none text-white'>The Wisher</Link>
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Header;