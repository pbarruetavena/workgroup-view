import { Link } from "react-router-dom";
import { useAuth } from "../store/AuthContext";

const Profile = () => {
    const {user} = useAuth();

    return (
        <div>
            <h1>Perfil</h1>
            <p>Você está autenticado como {user?.username}</p>
            <Link to="/">Voltar para home page</Link>
        </div>
    );
};

export default Profile;