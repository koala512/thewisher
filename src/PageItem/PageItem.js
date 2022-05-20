import Header from "../component/Header/Header";
import NavVertical from "../component/NavVertical/NavVertical";
import CardList from "../component/CardList/CardList";

function PageItem(){
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

export default PageItem;