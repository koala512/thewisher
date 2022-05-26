import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./Login/Login";
import PageList from "./PageList/PageList";
import PageCreateList from "./PageCreateList/PageCreateList";
import PageParametre from "./PageParametre/PageParametre";
import PageCreateItem from "./PageCreateItem/PageCreateItem";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path= "/" element={<Login />} />
                <Route path="/list" element={<PageList />}/>
                <Route path="/createlist" element={<PageCreateList />}/>
                <Route path="/createitem" element={<PageCreateItem />}/>
                <Route path="/parameters" element={<PageParametre />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
