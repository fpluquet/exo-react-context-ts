import {useLoginContext} from "../contexts/LoginContextProvider.tsx";


export default function LoginButton() {
    const {user, login, logout, connecting} = useLoginContext()
    return (
        <div>
            {user.isLoggedIn() ? (
                <button onClick={logout}>Déconnexion</button>
            ) : (
                <button onClick={connecting ? () => {} : login} disabled={connecting} >
                    {connecting ? 'Connexion en cours...' : 'Connexion'}
                </button>
            )}
        </div>
    )
}
