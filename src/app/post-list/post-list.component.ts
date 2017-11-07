import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: any = [];
  baseUrl = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) { }

  /*
   Esse metodo eh o que inicia junto ao componente, entao e bom fazer chamada de servicos nela
   */
  ngOnInit() {
    this.http.get(this.baseUrl).subscribe(data => this.posts = data);
  }

}
