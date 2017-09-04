import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ModalWindowService} from '../services/modal-window.service';
import {LoginPanelComponent} from '../app-login/login-panel/login-panel.component';
import {Observable} from 'rxjs/Observable';
import {AuthHttpMy} from '../services/auth-http';
import {VOPost} from '../models/vos';
import {MdDialog} from '@angular/material';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  providers: []
})
export class LandingComponent implements OnInit {

  isLoggedIn$:Observable<boolean>;

  summaryData: any[] = [
    {
      Image: 'assets/img/search-opportunities.png',
      Text: 'Find jobs, products, services and talent'
    },
    {
      Image: 'assets/img/promote-yourself.png',
      Text: 'Post your offers and your needs'
    },
    {
      Image: 'assets/img/create-alliances.png',
      Text: 'Join forces with other members to expand opportunities'
    },
    {
      Image: 'assets/img/do-it-your-way.png',
      Text: 'Join forces with other members to expand opportunities'
    },

  ];


  postNeed:VOPost[] = [];

  constructor(
              private route: ActivatedRoute,
              private modal: ModalWindowService,
              private auth:AuthHttpMy,
              private dialog:MdDialog
  ) {
    this.isLoggedIn$ = auth.isLogedIn$;
  }

  ngOnInit() {

    let login = this.route.snapshot.params.login;
    if(login){
      console.log('login', login);
      this.modal.openWindow(LoginPanelComponent, (res) => {
        console.log('LoginPanelComponent  ', res);
      })
    }
  }


  loginClick(){

    this.dialog.open(LoginPanelComponent, {
      width:'400px',
      height:'400px'
    })
  }

  logOutClick(){
    this.auth.logout()
  }

}
