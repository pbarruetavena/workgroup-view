import { createContext, useContext, useState, type ReactNode } from "react";
import { loginUser, type LoginCredentials } from "../service/authService";
import type { UserModel } from "../models/UserModel";

interface AuthContextType {
    user: UserModel | null;
    login: (credencials: LoginCredentials) => Promise<boolean>;
    logout: () => void;
    isLoading: boolean;
    error: string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState<UserModel | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const login = async (credencials: LoginCredentials): Promise<boolean> => {
        setIsLoading(true);
        setError(null);

        try {
            const responseUser = await loginUser(credencials);
            if(!!responseUser) {
                setUser(responseUser);
                return true;
            }
        } catch (error: any) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
        return false;
    }

    const logout = () => {
        setUser(null);
    };

    const value = {user, login, logout, isLoading, error};

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if(context == undefined) {
        throw new Error('userAuth deve ser usado dentro de um AuthProvider');
    }
    return context;
};