import { Component, OnInit } from '@angular/core';
import {PostService} from "../services/post.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Post} from "../model/Post";
import {AlertService} from "../services/alert.service";
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

  constructor(private postService: PostService,
              private redir: Router,
              private route: ActivatedRoute,
              private alertService: AlertService) { }
  /*
    Esse metodo eh o que inicia junto ao componente, entao e bom fazer chamada de servicos nela
 */
  ngOnInit() {
    // verifica se existe parametro id
    this.route.params.subscribe(params => {
      if (params.hasOwnProperty('id')) {
        this.postService.find(+params['id'])
            .subscribe(data => this.post = data);
      }
    });
  }

  save() {
    this.postService.save(this.post).subscribe(() => {
      this.alertService.mensagem = 'Post salvo com sucesso!';
        this.redir.navigate(['/posts']);
    });
  }

}
