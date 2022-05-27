import {Button, Card, Form} from "react-bootstrap";
import { Navigate  } from "react-router-dom";
import { useState } from "react";
import './LoginRegister.css';
import { isUserAuthenticated, authenticateUser}  from '../../utils/auth';
import axios from "axios";


function LoginBlock() {

    const [isAuth , setIsAuth] = useState(isUserAuthenticated());
    const [error , setError] = useState('');
    const [details, setDetails] = useState({ email: "", password: "" });
    

    const login = (details) => {
        axios.post('https://powerful-hollows-79086.herokuapp.com/login', {
            email: details.email,
            password: details.password
        })
            .then(res => {
                console.log(res, 'res');
                if (res.data.token) {
                    authenticateUser(res.data.token, res.data.data.uuid);
                    setIsAuth(true);
                } else {
                    setError(res.data.message);
                }
            })
            .catch(err => {
                setError(err.message);
            });
    };

    const submitHandler = event => {
        event.preventDefault();
        login(details);
      }
      console.log(isAuth,'isAuth');
      if (isAuth === true) {
        return <Navigate  to="/list"/>
      }
    
    
    return (
        <Card className="custom-card-login p-3">
            <Card.Title className='text-center text-form'>Coucou toi</Card.Title>
            <Card.Body>
                <Form onSubmit={submitHandler} >
                    <Form.Group>
                        <Form.Text width="50%" muted className="text-form">
                            Alors comme ca, on a une petite liste a préparer
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label htmlFor="inputNomUtilisateur" className="text-form">Adresse Email</Form.Label>
                        <Form.Control type="email" className="text-area"  onChange={event => setDetails({ ...details, email: event.target.value })}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label htmlFor="inputNomUtilisateur" className="text-form">Mot de passe</Form.Label>
                        <Form.Control type="password" className="text-area"  onChange={event => setDetails({ ...details, password: event.target.value })}/>
                    </Form.Group>
                    <Form.Group>
                        <div className="text-form">oups , j’ai oublié mon mot de passe</div>
                    </Form.Group>
                    <div className='d-flex justify-content-center'>
                        <Button className="btn-submit" variant="primary" type="submit">
                            Se connecter
                        </Button>
                    </div>
                </Form>
            </Card.Body>
            
        </Card>)
}

export default LoginBlock;