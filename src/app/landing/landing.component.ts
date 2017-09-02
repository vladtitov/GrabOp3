import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ModalWindowService} from '../services/modal-window.service';
import {LoginPanelComponent} from '../app-login/login-panel/login-panel.component';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  providers: []
})
export class LandingComponent implements OnInit {

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

  constructor(private route: ActivatedRoute,
              private modal: ModalWindowService) { }

  ngOnInit() {
    let login = this.route.snapshot.params.login;
    if(login){
      console.log('login', login);
      this.modal.openWindow(LoginPanelComponent, (res) => {
        console.log('LoginPanelComponent  ', res);
      })
    }
  }

}
