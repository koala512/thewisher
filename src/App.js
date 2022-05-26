import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Accueil from "./PageAccueil/Accueil";
import PageList from "./PageList/PageList";
import PageCreateList from "./PageCreateList/PageCreateList";
import PageParametre from "./PageParametre/PageParametre";
import PageCreateItem from "./PageCreateItem/PageCreateItem";
import PageItem from "./PageItem/PageItem";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path= "/" element={<Accueil />} />
                <Route path="/list" element={<PageList />}/>
                <Route path="/list-item" element={<PageItem />}/>
                <Route path="/createlist" element={<PageCreateList />}/>
                <Route path="/createitem" element={<PageCreateItem />}/>
                <Route path="/parameters" element={<PageParametre />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
