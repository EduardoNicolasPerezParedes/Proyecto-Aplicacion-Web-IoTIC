import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { HttpService } from './http.service';
import { User } from '../_models/user.model';
 
@Injectable()
export class UserService extends HttpService {

    constructor(protected http: HttpClient) {
        super(http);
        this.apiUrl += 'user';
    }

    /**
     * Registra un nuevo usuario.
     * 
     * @param user usuario a ser registrado.
     */
    create(user: User) {
        return this.http.post(
            this.apiUrl, 
            user.parseToJSON(),
            { headers: this.headers }
        );
    }
}