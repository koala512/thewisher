import {Button, Card, Form} from "react-bootstrap";
import { Navigate  } from "react-router-dom";
import { useState } from "react";
import { isUserAuthenticated, authenticateUser}  from '../../utils/auth';
import AlertError from './AlertError';
import axios from "axios";

import './LoginRegister.css'

function RegisterBlock() {

    const [isAuth , setIsAuth] = useState(isUserAuthenticated());
    const [error , setError] = useState('');
    const [details, setDetails] = useState({ pseudo: "", email: "", password: "" });
    

    // API requests
  const subscription = (details) => {
    axios.post('https://powerful-hollows-79086.herokuapp.com/user', {
      "pseudo": details.pseudo,
      "email": details.email,
      "password": details.password
    })
      .then((res) => {
        authenticateUser(res.data.token, res.data.data.uuid);
        setIsAuth(true);
      })
      .catch((err) => {
        setError(<AlertError/>);
      });
  };

  const submitHandler = event => {
    event.preventDefault();
    subscription(details);
  }

  // Redirection if connected
  if (isAuth) {
    return <Navigate to="/list" />;
  }


    return (
        <Card className="custom-card-login p-3">
            <Card.Title className="text-form">Diantre! je n'ai pas encore de compte</Card.Title>
            <Card.Body onSubmit={submitHandler}>
                <Form>
                    <Form.Group className="mb-3 " controlId="formBasicNomUtilisateur">
                        <Form.Label htmlFor="inputNomUtilisateur" className="text-form">Nom d'utilisateur</Form.Label>
                        <Form.Control type="username" className="text-area" onChange={event => setDetails({ ...details, pseudo: event.target.value })}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label htmlFor="inputEmail" className="text-form">Email</Form.Label>
                        <Form.Control type="email" className="text-area" onChange={event => setDetails({ ...details, email: event.target.value })}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label htmlFor="inputPassword" className="text-form">Mot de passe</Form.Label>
                        <Form.Control type="password" className="text-area" onChange={event => setDetails({ ...details, password: event.target.value })}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out"/>
                    </Form.Group>
                    <div className='d-flex justify-content-center'>
                        <Button className="btn-submit" variant="primary" type="submit">
                        Se connecter
                        </Button>
                    </div>
                </Form>
            </Card.Body>
            
        </Card>);

}

export default RegisterBlock;