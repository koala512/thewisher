import RegisterBlock from "../component/Login/RegisterBlock";
import LoginBlock from "../component/Login/LoginBlock.";
import bgLogo from './logo_thewisher_white.png';
import './Accueil.css'

function Accueil() {
    return (
        <div className="d-flex justify-content-center">
            <img src={bgLogo} alt='background app' className='background-app'/>
            <div className='col-4 mx-4'>
                <LoginBlock/>
            </div>
            <div className='col-4 mx-4'>
                <RegisterBlock/>
            </div>
        </div>
    );

}

export default Accueil;