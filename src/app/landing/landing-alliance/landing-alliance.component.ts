import { Component, OnInit } from '@angular/core';
import {VOPost} from "../../models/vos";
import {PostsService} from "../../posts/posts.service";

@Component({
  selector: 'app-landing-alliance',
  templateUrl: './landing-alliance.component.html',
  styleUrls: ['./landing-alliance.component.css']
})
export class LandingAllianceComponent implements OnInit {
  postNeed:VOPost[];
  constructor (private postsService:PostsService,) {
    this.postNeed = [];
  }
  ngOnInit() {
    //this.postsService.postsNeed$.subscribe(posts=>this.postNeed=posts);
  }

}
