
import RegisterBlock from "../component/Login/RegisterBlock";
import LoginBlock from "../component/Login/LoginBlock.";

function Login() {
    return (
        <div className="d-flex justify-content-center">
            <div className="m-5">
                <LoginBlock/>
            </div>
            <div className="m-5">
                <RegisterBlock />
            </div>
        </div>
    );

}

export default Login;