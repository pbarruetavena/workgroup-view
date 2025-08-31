import styled from "styled-components";
import CustomInput from "../ui/CustomInput";
import { useState } from "react";
import { useAuth } from "../../store/AuthContext";
import { FaBirthdayCake, FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import ErrorLabel from "../ui/ErrorLabel";
import CustomFormButton from "../ui/CustomFormButton";
import { getTodayDate } from "../../util/DateTimeUtil";

const RegisterContainer = styled.div`
    color: #eae0e0ff;
    padding: 30px;
`;

const RegisterFormIn = styled.form`
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

const RegisterForm = () => {
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [birthDate, setBirthDate] = useState(getTodayDate());

    const { isLoading, error } = useAuth();


    return (
        <RegisterContainer>
            <RegisterFormIn>
                <h1>Registrar</h1>
                <CustomInput
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                    icon={<FaUser />}
                />
                <CustomInput
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nome"
                    icon={<FaUser />}
                />
                <CustomInput
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Emal"
                    icon={<FaEnvelope />}
                />
                <CustomInput
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Senha"
                    icon={<FaLock />}
                />
                <CustomInput
                    type="date"
                    value={birthDate}
                    //onChange={(e) => setBirthDate(e.target.value)}
                    onChange={(e) => {
                        setBirthDate(e.target.value);
                        console.log(e.target.value);
                    }}
                    placeholder="Nascimento"
                    icon={<FaBirthdayCake />}
                />

                {error &&
                    <ErrorLabel message={error} />
                }

                <CustomFormButton type="submit" disabled={isLoading}>
                    {isLoading ? 'Carregando...' : "Registrar"}
                </CustomFormButton>

            </RegisterFormIn>
        </RegisterContainer>
    );
}

export default RegisterForm;