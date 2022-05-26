import CardItem from "../component/CardItem/CardItem";
import './PageItem.css'
import Header from "../component/Header/Header";
import NavVertical from "../component/NavVertical/NavVertical";
import UserCard from "../component/UserCard/UserCard";
import {Button} from "react-bootstrap";

function PageItem() {
    return (
        <>
            <Header/>
            <div className='page'>
                <NavVertical/>
                <div className='m-auto'>
                    <CardItem/>
                    <div className='text-end mt-5'>
                        <Button variant="danger">Ajouter un article</Button>
                    </div>
                </div>

            </div>
        </>

    )
}

export default PageItem;