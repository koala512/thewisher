import './CardList.css'
import {Card, Col, Container, Row} from "react-bootstrap";
import iconDelete from './icon delete.png';
import imgList from './unknown.png';


function CardList() {
    return (

            <Row className='custom-card'>
                <Col>
                    <img className='img-list' src={imgList} alt='imagelist' />
                </Col>
                <Col className="text-black d-flex justify-content-center "> Titre / description</Col>
                <Col><img src={iconDelete} alt='icone delete' className='float-end'/></Col>
            </Row>

    )

}

export default CardList;