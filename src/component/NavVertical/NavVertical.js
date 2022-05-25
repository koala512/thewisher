import {Dropdown, DropdownButton, Form, Nav, Navbar} from "react-bootstrap";
import './NavVertical.css';
import ImageProfil from "../ImageProfil/ImageProfil";
import LogoReglage from './reglage.png';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGear} from "@fortawesome/free-solid-svg-icons";

function NavVertical() {
    return (
        <Navbar bg="dark" expand="lg">
            <Navbar>
                <Navbar.Brand href="#home"><Link to="/list" classname='text-decoration-none'> <ImageProfil/> </Link></Navbar.Brand>
            </Navbar>
            <Navbar>
                <Navbar.Brand>
                    <Nav className='d-flex flex-column'>
                        <Link to="/createlist" className='text-decoration-none text-white'>Créer ma liste</Link>
                        <Link to="/list" className='text-decoration-none text-white'>Mes listes</Link>
                    </Nav>
                </Navbar.Brand>
            </Navbar>
            <div className=' d-flex mt-auto align-items-center w-100 px-2'>
                <DropdownButton className='btn-drop'
                    drop="up"
                    title={<FontAwesomeIcon icon={faGear} size="2x"/>}
                     >
                    <Dropdown.Item className="text-white" eventKey="1">Mon compte</Dropdown.Item>
                    <Dropdown.Item className="text-white" eventKey="2">Déconnexion</Dropdown.Item>
                    <Dropdown.Item className="text-white" eventKey="3">A propos</Dropdown.Item>

                </DropdownButton>

            </div>
        </Navbar>

    )
}

export default NavVertical;