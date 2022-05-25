import {Form, Nav, Navbar} from "react-bootstrap";
import './NavVertical.css';
import ImageProfil from "../ImageProfil/ImageProfil";
import LogoReglage from './reglage.png';
import {Link} from "react-router-dom";

function NavVertical() {
    return (
        <Navbar bg="dark" expand="lg">
            <Navbar>
                <Navbar.Brand href="#home"><Link to="/list"> <ImageProfil/> </Link></Navbar.Brand>
            </Navbar>
            <Navbar>
                <Navbar.Brand>
                    <Nav>
                        <Nav.Link><Link to="/createlist">Créer ma liste</Link></Nav.Link>
                        <Nav.Link><Link to="/list">Mes listes</Link></Nav.Link>
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