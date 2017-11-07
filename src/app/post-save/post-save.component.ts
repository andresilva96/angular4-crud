import { Component, OnInit } from '@angular/core';
import {PostService} from "../services/post.service";
import {Router} from "@angular/router";
import {Post} from "../model/Post";
@Component({
  selector: 'app-post-save',
  templateUrl: './post-save.component.html',
  styleUrls: ['./post-save.component.css']
})
export class PostSaveComponent implements OnInit {
  post: Post = {
    id: null,
    title: '',
    body: '',
  };

  constructor(private postService: PostService, private router: Router) { }

  ngOnInit() {
  }

  save() {
    this.postService.save(this.post).subscribe(() => this.router.navigate(['/posts']));
  }

}
