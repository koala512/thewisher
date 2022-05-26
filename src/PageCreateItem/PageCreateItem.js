import Header from "../component/Header/Header";
import NavVertical from "../component/NavVertical/NavVertical";
import {Button, Form} from "react-bootstrap";

function PageCreateItem() {
    return (
        <>
            <Header/>
            <div className='page'>
                <NavVertical/>
                <div className='m-auto w-50'>
                    <div className='h1 mb-5 text-center'>Ajouter un article</div>
                    <Form className='m-auto text-center'>
                        <Form.Group className="mb-3" controlId="TitleWishlist">
                            <Form.Label className='h4'>Titre de votre article</Form.Label>
                            <Form.Control type="text"/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="DescriptionWishlist">
                            <Form.Label className='h4'>Description</Form.Label>
                            <Form.Control as="textarea" rows={3}/>
                        </Form.Group>
                        <Form.Group className="mb-5" controlId="TitleWishlist">
                            <Form.Label className='h4'>Ajouter votre url</Form.Label>
                            <Form.Control type="text"/>
                        </Form.Group>
                        <Button type="submit">
                            Envoyer
                        </Button>
                    </Form>
                </div>
            </div>
        </>
    )
}

export default PageCreateItem;