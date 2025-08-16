
interface UserData {
    username: string;
    token: string;
}

export class UserModel {
    public readonly username: string;
    public readonly token: string;

    constructor(data: UserData) {
        this.username = data.username;
        this.token = data.token;
    }

    public isLoggedIn(): boolean {
        return !!this.token;
    }

}