import axios from "axios";
import { UserModel } from "../models/UserModel";

export interface LoginCredentials {
  username: string;
  password: string;
}

export interface AuthResponseSuccess {
  token: string;
  msg: string;
}

const API_URL = 'http://localhost:8080/workapi/auth/login';

export const loginUser = async (credentials: LoginCredentials): Promise<UserModel | null> => {
  try {
    const response = await axios.post<AuthResponseSuccess>(API_URL, credentials);
    
    if(!response.data.token) {
      return null;
    }
    return new UserModel({
      username: credentials.username,
      token: response.data.token,
    });
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data.msg || 'Credenciais inválidas.');
    } else {
      throw new Error('Erro de conexão com a API.');
    }
  }
};