import {Component, Input, OnInit} from '@angular/core';
import {VOPost} from '../../models/vos';
import {ActivatedRoute, Router} from '@angular/router';
import {MyPostsService} from '../my-posts.service';
import {AuthHttpMy} from '../../services/auth-http';
import {VOUserExt} from '../../app-login/vouser';

@Component({
  selector: 'app-my-post-view',
  templateUrl: './my-post-view.component.html',
  styleUrls: ['./my-post-view.component.css']
})
export class MyPostViewComponent implements OnInit {

  // @Input() myPost: VOPost;
  myUser: VOUserExt = new VOUserExt();
  idMyPost: number;
  // idSelectedMyPost: number;
  myPost: VOPost = new VOPost({});
  myPosts: VOPost[];

  constructor(private myPostsService: MyPostsService,
              private userService: AuthHttpMy,
              private router: Router,
              private aroute: ActivatedRoute) { }

  ngOnInit() {

    this.userService.user$.subscribe(user =>{
      this.myUser = user;
      console.log('this.myUser', this.myUser);
    });

    this.myPostsService.myPosts$.subscribe(posts => {
      console.log('posts', posts);
      this.myPosts = posts;
    });

    this.myPostsService.selectedMyPost$.subscribe(post => {
      console.log('myPost', post);
      this.myPost = post;
    });

    this.aroute.params.subscribe(params => {
      // console.log(params);
      // this.idSelectedMyPost =  +params['idSelectedMyPost'];
      this.idMyPost =  +params['idMyPost'];
      if (isNaN(this.idMyPost)) {
        console.error(' please provide ID for post to view');
        return;
      }
      this.myPostsService.getMyPostById(this.idMyPost);
    });
  }

  onEditClick(){
    this.router.navigate(['',{outlets: {'slideRight': ['post-edit', this.idMyPost]}}]);
    // this.router.navigate(['post-edit/' + this.idMyPost]);
  }

  onClickItem(item: VOPost) {
    this.myPostsService.setSelectedMyPost(item);
  }

  onDuplicateClick(){}
  onShareClick(){}
  onHideClick(){}
  onDeleteClick(){}

}
