import { useEffect, useState } from "react";
import { useAuth } from "../store/AuthContext";
import { useNavigate } from "react-router-dom";
import CustomInput from "../components/ui/CustomInput";
import ErrorLabel from "../components/ui/ErrorLabel";
import styled from "styled-components";
import { FaLock, FaUser } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";

const LoginContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    gap: 10px;
    color: #eae0e0ff;
    padding: 30px;
`;

const LoginForm = styled.form`
    background-color: #2a2b2e;
    padding: 40px;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
    width: 100%;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { login, isLoading, error, user } = useAuth();
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        await login({ username, password });
    };

    useEffect(() => {
        if (user) {
            navigate('/');
        }
    }, [user, navigate]);

    return (
        <LoginContainer>
            <button onClick={() => navigate(-1)}>
                <IoIosArrowBack style={{ fontSize: '24px' }} />
            </button>
            <LoginForm onSubmit={handleLogin}>
                <h1>Entrar</h1>
                <CustomInput
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Usuário"
                    icon={<FaUser />}
                />
                <CustomInput
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Senha"
                    icon={<FaLock />}

                />
                {error &&
                    <ErrorLabel message={error} />
                }
                <button type="submit" disabled={isLoading}>
                    {isLoading ? 'Carregando...' : 'Entrar'}
                </button>
            </LoginForm>
        </LoginContainer>
    );
};

export default Login;