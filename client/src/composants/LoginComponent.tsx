import {useLoginContext} from "../contexts/LoginContextProvider.tsx";
import {LoginForm} from "./LoginForm.tsx";
import {Navigate} from "react-router-dom";


export default function LoginComponent() {
    const loginContext = useLoginContext()

    return loginContext.user.isLoggedIn ? (
            <div>
                <Navigate to={"/"}/>
            </div>
        ) : (
            <div>
                <LoginForm />
        </div>
    )

}
