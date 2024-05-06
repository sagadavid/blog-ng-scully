import { Component, OnInit } from '@angular/core';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss'
})
export class ArticlesComponent implements OnInit{
  constructor(private scullyRouSer: ScullyRoutesService) { }
  posts$: Observable<ScullyRoute[]> | undefined;

ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.posts$=this.scullyRouSer.available$.pipe(map(posts=>posts.filter(post=>post.title)))
}

}


