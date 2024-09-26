import {useLoginContext} from "../contexts/LoginContextProvider.tsx";

// todo 2 :
// ce composant ne devait être visible que lorsqu'un utilisateur est connecté (pas en anonyme, ni en cours de connexion)
// ne touchez pas à ce composant, travaillez sur la hiérarchie des composants pour qu'il soit affiché uniquement lorsqu'un utilisateur est connecté

// todo 4 :
// ce composant doit afficher des informations secrètes liées à l'utilisateur connecté et pas toujours les mêmes secrets

export function SecretPage() {
    const {user} = useLoginContext()
    return (
        <div>
            <h3>Page secrète avec des infos secrètes de {user.name}</h3>
            <ul>
                <li>Il aime les chats</li>
                <li>Il a fait de la chirurgie esthétique</li>
                <li>Il a un tatouage de Pikachu</li>
                <li>Il n'a pas d'imagination et il utilise copilot pour générer des secrets</li>
            </ul>
        </div>
    )
}
