import {Button, Form} from "react-bootstrap";
import './FormList.css';

function FormList(){
    return (
        <Form className='m-auto text-center'>
            <Form.Group className="mb-5" controlId="TitleWishlist">
                <Form.Label className='h4'>Titre de la wishlist</Form.Label>
                <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="DescriptionWishlist">
                <Form.Label className='h4'>Description</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button type="submit">
                Envoyer
            </Button>
        </Form>
    )
}

export default FormList;