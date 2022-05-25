import {Button, Card, Form} from "react-bootstrap";
import './usercard.css'
import modif from "./modif.png"


function UserCard() {
    return (
        <Card className="user-card">
            <Card.Header className="card-header">
                <div className="user text-center">

                    <div class="profile">

                        <img src="https://i.imgur.com/JgYD2nQ.jpg" class="rounded-circle" width="80"/>

                    </div>

                </div>
            </Card.Header>
            <Card.Body className="card-body">
                <blockquote className="blockquote mb-0">
                    <form className="form-horizontal">
                        <Form.Group className="mb-3 form-group " controlId="formBasicText">
                            <Form.Label className="form-label">Nom</Form.Label>
                            <div className="container-form-custom">
                                <Form.Control type="text" placeholder="nom"/>
                                <Button className="custom-btn-usercard"><img className="modif-picture"
                                                                             src={modif}></img></Button>
                            </div>
                        </Form.Group>

                        <Form.Group className="mb-3 form-group " controlId="formBasicEmail">
                            <Form.Label className="form-label">Adresse mail</Form.Label>
                            <div className="container-form-custom">
                                <Form.Control type="email" placeholder="Enter email"/>
                                <Button className="custom-btn-usercard"><img className="modif-picture"
                                                                             src={modif}></img></Button>
                            </div>
                        </Form.Group>

                        <Form.Group className="mb-3 form-group " controlId="formBasicPassword">
                            <Form.Label className="form-label">Mot de passe</Form.Label>
                            <div className="container-form-custom">
                                <Form.Control type="password" className="custom-form-control" placeholder="Password"/>
                                <Button className="custom-btn-usercard"><img className="modif-picture"
                                                                             src={modif}></img></Button>
                            </div>

                        </Form.Group>

                    </form>
                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default UserCard;