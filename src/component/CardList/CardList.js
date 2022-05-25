import './CardList.css'
import {Col, Row} from "react-bootstrap";
import imgList from './unknown.png';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";


function CardList() {
    return (

            <Row className='custom-card'>
                <Col>
                    <img className='img-list' src={imgList} alt='imagelist' />
                </Col>
                <Col className="text-black d-flex justify-content-center "> Titre / description</Col>
                <Col><FontAwesomeIcon icon={faTrash} size="2x" className='float-end mt-2'/></Col>
            </Row>

    )

}

export default CardList;