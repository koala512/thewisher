import React, { useState } from 'react';
import {Button, Form} from "react-bootstrap";
import './FormList.css';
import axios from "axios";
import { getToken } from '../../utils/auth';
import { getUuid } from '../../utils/auth';
import { Navigate } from 'react-router-dom';

function FormList(){

    const [details, setDetails] = useState({ title: "", comment: "", });
    const [toLists, setToLists] = useState('');
  
    const token = getToken();
    const uuid = getUuid();

   //https://powerful-hollows-79086.herokuapp.com/list
    const submitHandler = event => {
        event.preventDefault();
        axios.post(`https://powerful-hollows-79086.herokuapp.com/list`, {
            "uuid": uuid,
            "title": details.title,
            "comment": details.comment,
        }, {
            headers: {'Authorization': `Bearer ${token}`}
        })
        .then(res => {
            console.log(res);
            setDetails({ title: "", comment: "", });
            setToLists(true);
        })
        .catch(err => {
            console.log(err);
        });
    };

    if (token === null) {
        return <Navigate to="/" />;
    }
    if (toLists===true) {
        return <Navigate to="/list" />;
    }
    
    return (
        <Form className='m-auto text-center' onSubmit={submitHandler}>
            <Form.Group className="mb-5" controlId="TitleWishlist">
                <Form.Label className='h4'>Titre de la wishlist</Form.Label>
                <Form.Control type="text" onChange={event => setDetails({ ...details, title: event.target.value })}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="DescriptionWishlist">
                <Form.Label className='h4'>Description</Form.Label>
                <Form.Control as="textarea" rows={3} onChange={event => setDetails({ ...details, comment: event.target.value })} />
            </Form.Group>
            <Button type="submit">
                Envoyer
            </Button>
        </Form>
    )
}

export default FormList;