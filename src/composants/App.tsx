import './App.css'
import WithoutConnection from "./WithoutConnection.tsx";
import LoginContextProvider from "../contexts/LoginContextProvider.tsx";
import LoginComponent from "./LoginComponent.tsx";
import LoginButton from "./LoginButton.tsx";
import {SecretPage} from "./SecretPage.tsx";

function App() {
    return (
        <>
            <WithoutConnection></WithoutConnection>
            <LoginContextProvider>
                <div>
                    <LoginComponent></LoginComponent>
                    <LoginButton></LoginButton>
                    <SecretPage></SecretPage>
                </div>
            </LoginContextProvider>
        </>
    )
}

export default App
