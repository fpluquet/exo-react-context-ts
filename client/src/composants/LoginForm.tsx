import LoginButton from "./LoginButton.tsx";
import {useState} from "react";
import {useLoginContext} from "../contexts/LoginContextProvider.tsx";
import "./LoginForm.css"

export function LoginForm() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const loginContext = useLoginContext()

    const tryConnect = async () => {
        loginContext.login(username, password)
    }

    return <form>
        <label htmlFor="username">Nom d'utilisateur</label>
        <input type="text" placeholder="Nom d'utilisateur" value={username} onChange={e => setUsername(e.target.value)} />
        <label htmlFor="password">Mot de passe</label>
        <input type="password" placeholder="Mot de passe" value={password} onChange={e => setPassword(e.target.value)} />
        <LoginButton onClick={tryConnect} />
    </form>
}
