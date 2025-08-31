import { UserModel } from "../models/UserModel"

export const logon = (user: UserModel) => {
    localStorage.setItem('token', user.token);
    localStorage.setItem('user', user.username);
}

export const getLogged = () => {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');

    const data = {username: user! , token: token! };
    return new UserModel(data);
}

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
}

export const isLogged = () => {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    return !!token && !!user;
}