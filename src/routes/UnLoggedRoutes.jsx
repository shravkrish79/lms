import { Routes, Route } from "react-router-dom";
import { useUser } from "../state/useUser";
import WelcomePage from "../pages/WelcomePage";
import PageNotFound from "../pages/PageNotFound";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import RecoverPassword from "../pages/RecoverPassword";

export default function UnLoggedRoutes() {
    const { uid } = useUser();
    console.log(uid);
    return (
        <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/recoverpassword" element={<RecoverPassword />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    )
}