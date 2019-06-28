import {Component, Input, OnInit} from '@angular/core';
import {PostsService} from '../services/posts.service';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postCreatedAt: Date;
  @Input() postLoveIts: number;
  @Input() postIndex: number;

  constructor(private postService: PostsService) {}

  ngOnInit() {
  }
  onLoveIt() {
    this.postService.updateNbLoveItsPost(this.postIndex, this.postLoveIts + 1);
  }
  onDontLoveIt() {
    this.postService.updateNbLoveItsPost(this.postIndex, this.postLoveIts - 1);
  }
  onRemovePost() {
    this.postService.removePost(this.postIndex);
  }

}
