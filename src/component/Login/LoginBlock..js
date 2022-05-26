import {Button, Card, Form} from "react-bootstrap";
import './LoginRegister.css';


function LoginBlock() {
    return (
        <Card className="custom-card-login p-3">
            <Card.Title className='text-center text-form'>Coucou toi</Card.Title>
            <Card.Body>
                <Form>
                    <Form.Group>
                        <Form.Text width="50%" muted className="text-form">
                            Alors comme ca, on a une petite liste a préparer
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label htmlFor="inputNomUtilisateur" className="text-form">Adresse Email</Form.Label>
                        <Form.Control type="email" className="text-area"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label htmlFor="inputNomUtilisateur" className="text-form">Mot de passe</Form.Label>
                        <Form.Control type="password" className="text-area"/>
                    </Form.Group>
                    <Form.Group>
                        <div className="text-form">oups , j’ai oublié mon mot de passe</div>
                    </Form.Group>
                </Form>
            </Card.Body>
            <div className='d-flex justify-content-center'>
                <Button className="btn-submit" variant="primary" type="submit">
                    Se connecter
                </Button>
            </div>
        </Card>)
}

export default LoginBlock;