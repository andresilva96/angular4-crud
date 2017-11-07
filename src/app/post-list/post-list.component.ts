import { Component, OnInit } from '@angular/core';
import {PostService} from "../services/post.service";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: any = [];
  constructor(private post: PostService) { }


  ngOnInit() {
    this.post.selectPost().subscribe(data => this.posts = data);
  }
}
