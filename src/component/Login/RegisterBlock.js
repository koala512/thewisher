import {Button, Card, Form} from "react-bootstrap";
import pp from "./pp.png";
import './style.css'

function RegisterBlock() {
    return (
        <Card className="p-3">
            <Card.Title>Diantre! je n'ai pas encore de compte</Card.Title>
            <Card.Body>
                <Form>
                    <Form.Group className="mb-3 " controlId="formBasicNomUtilisateur">
                        <Form.Label htmlFor="inputNomUtilisateur">Nom d'utilisateur</Form.Label>
                        <Form.Control type="username"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label htmlFor="inputEmail">Email</Form.Label>
                        <Form.Control type="email"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label htmlFor="inputPassword">Mot de passe</Form.Label>
                        <Form.Control type="password"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out"/>
                    </Form.Group>
                </Form>
            </Card.Body>
            <div className='d-flex justify-content-center'>
                <Button variant="primary" type="submit">
                    Connexion
                </Button>
            </div>
        </Card>);

}

export default RegisterBlock;