import {Component, OnInit, ViewChild} from '@angular/core';
import {PostService} from "../services/post.service";
import {Post} from "../model/Post";
import {ModalComponent} from "../bootstrap/modal/modal.component";
import {AlertService} from "../services/alert.service";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: Array<Post> = [];
  postToDelete = null;
  mensagem = null;
  @ViewChild(ModalComponent)
  modal: ModalComponent;

  constructor(private postService: PostService,
              private alertService: AlertService) {
    this.mensagem = this.alertService.mensagem;
  }

  ngOnInit() {
    this.postService.selectPost().subscribe(data => this.posts = data);
  }

/*  remove(id: number, index: number) {
    if (confirm('Deseja excluir esse post?')) {
      this.postService.remove(id).subscribe(() => {
          // remove do array
          this.posts.splice(index, 1);
      });
    }
  }*/

  remove() {
      this.postService.remove(this.postToDelete.id).subscribe(() => {
        // pegando o index no array
        const index = this.posts.indexOf(this.postToDelete);
        // remove do array
        this.posts.splice(index, 1);
        this.modal.close();
      });
  }
  // O parametro post, vai ser o objeto que vai receber no delete
  openModal(post: Object) {
    this.postToDelete = post;
    this.modal.open();
  }
}
