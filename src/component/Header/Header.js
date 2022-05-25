import {Container, Navbar} from "react-bootstrap";
import './Header.css';
import {Link} from "react-router-dom";

function Header (){
    return (
        <Navbar bg="dark">
            <Container>
                <Navbar.Brand>
                    <span className='title'><Link to="/list">The Wisher</Link></span>
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Header;