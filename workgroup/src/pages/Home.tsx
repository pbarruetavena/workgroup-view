import { Link } from "react-router-dom";
import { useAuth } from "../store/AuthContext";

const Home = () => {
    const { user, logout } = useAuth();

    return (
        <div>
            <h1>Home page</h1>
            <p>Página inicial</p>
            <Link to="/register">Ir para a página de Cadastro</Link><br/>
            <div>
                {user ? (
                    <><p>Olá, {user?.username}</p><button onClick={logout}>Sair</button></>
                ) : (
                    <><Link to="/login">Ir para a página de Login</Link><br /></>
                )}
            </div>
        </div>
    );
};

export default Home;