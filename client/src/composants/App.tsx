import './App.css'
import LoginContextProvider from "../contexts/LoginContextProvider.tsx";
import {Router} from "../router/Router.tsx";
import LoginButton from "./LoginButton.tsx";

function App() {
    return (
        <>
            <LoginContextProvider>
                <div className="navbar">
                    <h3>Secret HELHa</h3>
                    <LoginButton></LoginButton>
                </div>
                <div className="body">
                    <Router/>
                </div>
            </LoginContextProvider>
        </>
)
}

export default App
