import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class PostService {
    baseUrl = 'https://jsonplaceholder.typicode.com/posts';

    constructor(private http: HttpClient) { }

    find(id: number): Observable<any> {
        return this.http.get(`${this.baseUrl}/${id}`);
    }

    selectPost(): Observable<Array<any>> {
        return this.http.get(`${this.baseUrl}`);
    }

    /*
     Se o id existir, insere se nao atualiza
    */
    save(data: any): Observable<any> {
        return !data.id
            ? this.http.post(this.baseUrl, data)
            : this.http.put(`${this.baseUrl}/${data.id}`, data);
    }

    remove(id: number): Observable<any> { // status 204
        return this.http.delete(`${this.baseUrl}/${id}`);
    }
}
