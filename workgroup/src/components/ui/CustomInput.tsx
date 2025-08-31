import React from 'react';
import styled from 'styled-components';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    icon?: React.ReactNode;
}

const InputContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;

    svg {
        position: absolute;
        left: 15px;
        color: #888;
        font-size: 16px;
    }
`;

const StyledInput = styled.input`
    width: 100%;
    padding: 12px 12px 12px 40px;
    border: 1px solid #444;
    background-color: #3b3c3e;
    color: #fff;
    border-radius: 4px;
    transition: border-color 0.2s;

    &:focus {
        outline: none;
        border-color: #007bff;
    }

    &::placeholder {
        color: #aaa;
    }
`;


const CustomInput = React.forwardRef<HTMLInputElement, InputProps>(({icon, ...props}, ref) => {
    return (
        <InputContainer>
            {icon}
            <StyledInput
                ref={ref}
                {...props}
            />
        </InputContainer>
    );
});

export default CustomInput;