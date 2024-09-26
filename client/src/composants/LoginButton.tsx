import {useLoginContext} from "../contexts/LoginContextProvider.tsx";


export default function LoginButton({onClick}: {onClick: () => void}) {
    const {user, logout, connecting} = useLoginContext()
    return (
        <div>
            {user.isLoggedIn ? (
                <button onClick={logout}>Déconnexion</button>
            ) : (
                <button onClick={connecting ? () => {} : onClick} disabled={connecting} >
                    {connecting ? 'Connexion en cours...' : 'Connexion'}
                </button>
            )}
        </div>
    )
}
