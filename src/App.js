import logo from './logo.svg';
import './App.css';
import Login from "./Login/Login";
import Header from "./component/Header/Header";
import NavVertical from "./component/Navbar/NavVertical";
import PageList from "./PageList/PageList";

function App() {
    return (
        <>
            <Header/>
            <div className='page'>
                <NavVertical/>
                <PageList/>
            </div>
        </>

    );
}

export default App;
