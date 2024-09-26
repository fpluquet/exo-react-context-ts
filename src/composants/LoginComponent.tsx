import {useLoginContext} from "../contexts/LoginContextProvider.tsx";


export default function LoginComponent() {
    const loginContext = useLoginContext()

    return loginContext.user.isLoggedIn ? (
            <div>
                <h1>Bienvenue, {loginContext.user.name}</h1>
            </div>
        ) : (
            <div>
                <h1>Merci de vous connecter</h1>
        </div>
    )

}
