import { useState } from "react";
import { useAuth } from "../store/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { login, isLoading, error } = useAuth();
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        const sucess = await login({username, password});
        if(sucess) {
            navigate('/profile');
        }
    };

    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        gap: ''
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleLogin} style={{display: 'flex', flexDirection: 'column', gap: '3px'}}>
                <input type="text" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    placeholder="Usuário"/>
                <input type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Senha"/>
                {error && (
                    <p style={{ color: 'red', marginTop: '10px' }}>
                    {error}
                    </p>
                )}
                <button type="submit" disabled={isLoading}>
                    {isLoading ? 'Carregando...' : 'Entrar'}
                </button>
            </form>
        </div>
    );
};

export default Login;