import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class PostService {
    baseUrl = 'https://jsonplaceholder.typicode.com';

    constructor(private http: HttpClient) { }

    /*
    Esse metodo eh o que inicia junto ao componente, entao e bom fazer chamada de servicos nela
   */
    selectPost(): Observable<Array<any>> {
        return this.http.get(`${this.baseUrl}/posts`);
    }

    save(data: any): Observable<Array<any>> {
        return this.http.post(`${this.baseUrl}/posts`, data);
    }
}
