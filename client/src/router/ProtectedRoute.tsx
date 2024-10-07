import {useLoginContext} from "../contexts/LoginContextProvider.tsx";
import {Navigate, Outlet} from "react-router-dom";

const ProtectedRoute = () => {
    const {user} = useLoginContext()
    if(!user.isLoggedIn) return <Navigate to="/login"></Navigate>
    return <Outlet></Outlet> // Outlet est un espace réservé pour les routes imbriquées
};
export default ProtectedRoute;
