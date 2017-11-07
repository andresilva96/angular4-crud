import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {PostService} from "./services/post.service";
import { PostSaveComponent } from './post-save/post-save.component';

const appRoutes: Routes = [
    {path: '', pathMatch: 'full', component: PostListComponent},
    {path: 'post', component: PostListComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostSaveComponent
  ],
  imports: [
    BrowserModule,
      RouterModule.forRoot(appRoutes),
      HttpClientModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
