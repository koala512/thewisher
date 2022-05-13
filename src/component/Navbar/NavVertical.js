import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import './style.css';

function NavVertical() {
    return (
        <div className='Navbar-vertical'>
            <Navbar bg="dark" expand="lg">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Créer une liste</Nav.Link>
                        <Nav.Link href="#link">Mes listes</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>

    )
}

export default NavVertical;