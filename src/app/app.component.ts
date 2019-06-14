import { Component } from '@angular/core';
import {Post} from './post-list-component/Post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts = [
    new Post('Mon premier post', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
      'Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.' , 1),
    new Post('Mon deuxième post', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
      'Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.' , 0),
    new Post('Encore un post', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
      'Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.' , -1)
    ];
}
