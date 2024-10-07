import {useLoginContext} from "../contexts/LoginContextProvider.tsx";
import {useNavigate} from "react-router-dom";

export default function LoginButton() {
    const {user, logout, connecting} = useLoginContext()
    const navigate = useNavigate()
    const goToLogin = () => navigate('/login')
    return (
        <div>
            {user.isLoggedIn ? (
                <button onClick={logout}>Déconnexion</button>
            ) : (
                <button onClick={goToLogin} disabled={connecting} >
                    {connecting ? 'Connexion en cours...' : 'Connexion'}
                </button>
            )}
        </div>
    )
}
