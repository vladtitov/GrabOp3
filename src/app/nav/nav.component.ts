import { Component, OnInit } from '@angular/core';
import {AuthHttpMy} from '../app-login/auth-http';
import {HelpComponent} from './help/help.component';
import {ModalWindowService} from '../services/modal-window.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  profile_pic: string;

  constructor(private authHttp: AuthHttpMy, public modal: ModalWindowService) {
  }

  ngOnInit() {
    this.authHttp.user$.subscribe(user => {
      this.profile_pic = user.profile_pic;
    });
  }

  openHelp() {

    this.modal.openWindow(HelpComponent, (res) => {
      console.log('helpComponent  ', res);
    });
  }
}
