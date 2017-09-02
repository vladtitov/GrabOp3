/**
 * Created by Vlad on 9/9/2016.
 */
import {Component, OnInit, Input, Output, EventEmitter} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {VOSettings, VOService, VOPost, VOSearch} from "../models/vos";


@Component({
  selector:'posts-list',
  template:`
<div class="posts-list">
    <!--  <div *ngFor="let item of posts">                
            <posts-card (click)="onPostCardClick(item)" [my_item]="item"></posts-card>      
      </div>-->

</div>
`
})
export class PostsList implements OnInit{

  @Input() posts:VOPost[];
  @Input() search:VOSearch;
  @Output() selected:EventEmitter<VOPost> = new EventEmitter<VOPost>();

    allPosts:VOPost[];
    filtered:VOPost[];
  myServices:VOService[];

  constructor(
   // private myService:PostEditService
  ){

  }

  ngOnInit():void{
    this.allPosts = this.filtered = this.posts;
  }


  onPostCardClick(item:VOPost):void{
    this.selected.emit(item);
  }



}
