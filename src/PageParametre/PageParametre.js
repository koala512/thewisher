import UserCard from "../component/UserCard/UserCard";
import {Button} from "react-bootstrap";
import Header from "../component/Header/Header";
import NavVertical from "../component/NavVertical/NavVertical";

function PageParametre() {
    return (
        <>
            <Header/>
            <div className='page'>
                <NavVertical/>
                <div className='m-auto'>
                    <UserCard/>
                    <div className='text-end mt-5'>
                        <Button variant="danger">Supprimer le compte</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PageParametre;