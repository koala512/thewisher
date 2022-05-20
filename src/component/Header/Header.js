import {Container, Navbar} from "react-bootstrap";
import './Header.css';

function Header (){
    return (
        <Navbar bg="dark">
            <Container>
                <Navbar.Brand  href="#home">
                    <span className='title'>The Wisher </span>
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Header;