import {
    Routes,
    Route
} from "react-router-dom";
import {Home} from "../composants/Home.tsx";
import LoginComponent from "../composants/LoginComponent.tsx";
import ProtectedRoute from "./ProtectedRoute.tsx";
import {SecretPage} from "../composants/SecretPage.tsx";

export function Router() {
    return <Routes>
            <Route path="/login" element={<LoginComponent/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="protected" element={<ProtectedRoute></ProtectedRoute>}>
                <Route path="secrets" element={<SecretPage></SecretPage>}/>
            </Route>
            <Route path="*" element={<div>404</div>}/>
    </Routes>
}
