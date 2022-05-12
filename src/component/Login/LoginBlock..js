import {Button, Card, Form} from "react-bootstrap";
import pp from './pp.png';
import './style.css';


function LoginBlock() {
    return (
        <Card className="p-3">
            <Card.Title className='text-center'>Coucou toi</Card.Title>
            <Card.Body>
                <Form>
                    <Form.Group>
                        <Form.Text width="50%" muted>
                            Alors comme ca, on a une petite liste a préparer
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label htmlFor="inputNomUtilisateur">Adresse Email</Form.Label>
                        <Form.Control type="email"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label htmlFor="inputNomUtilisateur">Mot de passe</Form.Label>
                        <Form.Control type="password"/>
                    </Form.Group>
                </Form>
            </Card.Body>
            <div className='d-flex justify-content-center'>
                <Button variant="primary" type="submit">
                    Envoyer
                </Button>
            </div>
        </Card>)
}

export default LoginBlock;