import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import './style.css';
import ImageProfil from "../ImageProfil/ImageProfil";

function NavVertical() {
    return (
        <div className='Navbar-vertical'>
            <Navbar bg="dark" expand="lg">
                <Navbar.Brand href="#home"> <ImageProfil /></Navbar.Brand>
                <Navbar>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Créer une liste</Nav.Link>
                        <Nav.Link href="#link">Mes listes</Nav.Link>
                    </Nav>
                </Navbar>
            </Navbar>
        </div>

    )
}

export default NavVertical;