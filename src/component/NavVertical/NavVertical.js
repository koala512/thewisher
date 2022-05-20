import { Form, Nav, Navbar} from "react-bootstrap";
import './NavVertical.css';
import ImageProfil from "../ImageProfil/ImageProfil";
import LogoReglage from './reglage.png';

function NavVertical() {
    return (
        <Navbar bg="dark" expand="lg">
            <Navbar>
                <Navbar.Brand href="#home"> <ImageProfil/></Navbar.Brand>
            </Navbar>
            <Navbar>
                <Navbar.Brand>
                    <Nav>
                        <Nav.Link href="#home">Créer une liste</Nav.Link>
                        <Nav.Link href="#link">Mes listes</Nav.Link>
                    </Nav>
                </Navbar.Brand>
            </Navbar>
            <div className=' d-flex mt-auto justify-content-between align-items-center'>
                <Form>
                    <Form.Check type="switch" id="custom-switch"/>
                </Form>
                <img src={LogoReglage} alt='logo reglage' className='lg-reglage'></img>
            </div>
        </Navbar>

    )
}

export default NavVertical;