import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import PrivateRoute from "./PrivateRoute";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register/>} />

                <Route path="/profile"
                    element={<PrivateRoute><Profile/></PrivateRoute>}
                />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;