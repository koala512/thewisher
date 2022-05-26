import {Button, Card, Form} from "react-bootstrap";

import './LoginRegister.css'

function RegisterBlock() {
    return (
        <Card className="custom-card-login p-3">
            <Card.Title className="text-form">Diantre! je n'ai pas encore de compte</Card.Title>
            <Card.Body>
                <Form>
                    <Form.Group className="mb-3 " controlId="formBasicNomUtilisateur">
                        <Form.Label htmlFor="inputNomUtilisateur" className="text-form">Nom d'utilisateur</Form.Label>
                        <Form.Control type="username" className="text-area"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label htmlFor="inputEmail" className="text-form">Email</Form.Label>
                        <Form.Control type="email" className="text-area"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label htmlFor="inputPassword" className="text-form">Mot de passe</Form.Label>
                        <Form.Control type="password" className="text-area"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out"/>
                    </Form.Group>
                </Form>
            </Card.Body>
            <div className='d-flex justify-content-center'>
                <Button className="btn-submit" variant="primary" type="submit">
                Se connecter
                </Button>
            </div>
        </Card>);

}

export default RegisterBlock;