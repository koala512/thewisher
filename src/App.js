import './App.css';
import Header from "./component/Header/Header";
import FormList from "./component/FormList/FormList";

import NavVertical from "./component/NavVertical/NavVertical";

function App() {
    return (
        <>
            <Header/>
            <div className='page'>
               <NavVertical />
                <FormList />
            </div>
        </>
    );
}

export default App;
