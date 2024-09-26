import './App.css'
import WithoutConnection from "./WithoutConnection.tsx";
import LoginContextProvider from "../contexts/LoginContextProvider.tsx";
import LoginComponent from "./LoginComponent.tsx";
import {SecretPage} from "./SecretPage.tsx";
import {IfConnectedComponent} from "./IfConnectedComponent.tsx";
import {LoginForm} from "./LoginForm.tsx";

function App() {
    return (
        <>
            <LoginContextProvider>
                <IfConnectedComponent>
                    <WithoutConnection></WithoutConnection>
                </IfConnectedComponent>
                <LoginComponent></LoginComponent>
                <LoginForm></LoginForm>
                <IfConnectedComponent>
                    <SecretPage></SecretPage>
                </IfConnectedComponent>
            </LoginContextProvider>
        </>
    )
}

export default App
