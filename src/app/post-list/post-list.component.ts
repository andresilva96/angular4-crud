import { Component, OnInit } from '@angular/core';
import {PostService} from "../services/post.service";
import {Post} from "../model/Post";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: Array<Post> = [];
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.selectPost().subscribe(data => this.posts = data);
  }

  remove(id: number, index: number) {
    if (confirm('Deseja excluir esse post?')) {
      this.postService.remove(id).subscribe(() => {
          // remove do array
          this.posts.splice(index, 1);
      });
    }
  }
}
