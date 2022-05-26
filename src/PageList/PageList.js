import CardList from "../component/CardList/CardList";
import './PageList.css'
import Header from "../component/Header/Header";
import NavVertical from "../component/NavVertical/NavVertical";
import UserCard from "../component/UserCard/UserCard";
import {Button} from "react-bootstrap";

function PageList() {
    return (
        <>
            <Header/>
            <div className='page'>
                <NavVertical/>
                <div className='m-auto'>
                    <CardList/>
                </div>
            </div>
        </>

    )
}

export default PageList;