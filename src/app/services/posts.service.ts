import * as firebase from 'firebase';
import {Injectable} from '@angular/core';
import {Post} from '../models/Post';
import {Subject} from 'rxjs';

@Injectable()
export class PostsService {
  posts: Post[] = [];
  postSubject = new Subject<Post[]>();
  constructor() {}

  emitPosts() {
    this.postSubject.next(this.posts);
  }
  savePosts() {
    firebase.database().ref('/posts').set(this.posts);
  }
  getPosts() {
    firebase.database().ref('/posts').on(
      'value', (data) => {
        this.posts = data.val() ? data.val() : [];
        this.emitPosts();
      }
    );
  }
  createNewPost(newPost: Post) {
    this.posts.push(newPost);
    this.savePosts();
    this.emitPosts();
  }
  updateNbLoveItsPost(index: number, loveIts: number) {
    console.log(loveIts);
    this.posts[index].loveIts = loveIts;
    this.savePosts();
    this.emitPosts();
  }
  removePost(index: number) {
    this.posts.splice(index, 1);
    this.savePosts();
    this.emitPosts();
  }
}
