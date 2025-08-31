import { FaExclamationTriangle } from "react-icons/fa";

interface ErrorLabelProps {
    message: string;
}

const ErrorLabel: React.FC<ErrorLabelProps> = ({ message }) => {
    const errorContainerStyle: React.CSSProperties = {
        backgroundColor: '#f44336',
        color: '#e9e4e4ff',
        padding: '15px',
        borderRadius: '5px',
        marginBottom: '10px',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        border: '1px solid #d32f2f',
    };

    const iconStyle: React.CSSProperties = {
        fontSize: '20px',
    };

    const messageStyle: React.CSSProperties = {
        flexGrow: 1,
        textAlign: 'left',
    };

    return (
        <div style={errorContainerStyle}>
            <FaExclamationTriangle style={iconStyle} />
            <span style={messageStyle}>{message}</span>
        </div>
    );
};

export default ErrorLabel;