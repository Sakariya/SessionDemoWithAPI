import { Injectable } from '@angular/core';
const TOKEN_KEY = 'AuthToken';

@Injectable()
export class TokenStorage {

    public signOut() {
        window.localStorage.removeItem(TOKEN_KEY);
        window.localStorage.clear();
    }

    public saveToken(token: string) {
        window.localStorage.removeItem(TOKEN_KEY);
        window.localStorage.setItem(TOKEN_KEY, token);
    }

    static get token(): string {
        return localStorage.getItem(TOKEN_KEY);
    }

    static get exists(): boolean {
        return !!TokenStorage.token;
    }
}
