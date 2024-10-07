import {useLoginContext} from "../contexts/LoginContextProvider.tsx";
import {Link} from "react-router-dom";

export function Home() {
    const user = useLoginContext().user
    if(!user.isLoggedIn) return <div>Vous devez être connecté pour accéder à cette page</div>
    return <div>
        <h2>Bienvenue sur le secret HELHa !</h2>
        <Link to="/protected/secrets">Accéder aux secrets</Link>
    </div>
}
