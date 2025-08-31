import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/AuthContext";
import { useEffect } from "react";
import { IoIosArrowBack } from "react-icons/io";
import RegisterForm from "../components/form/RegisterForm";
import styled from "styled-components";

const RegisterPageContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
`;

const Register = () => {

    const {user} = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if(user) {
            navigate('/');
        }
    }, []);

    return (
        <RegisterPageContainer>
            <button onClick={() => navigate(-1)}>
                <IoIosArrowBack style={{ fontSize: '24px' }} />
            </button>
            <RegisterForm></RegisterForm>
            
        </RegisterPageContainer>
    );
};
export default Register;