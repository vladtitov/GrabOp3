import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-landing-summary',
  templateUrl: './landing-summary.component.html',
  styleUrls: ['./landing-summary.component.css']
})
export class LandingSummaryComponent implements OnInit {

  @Input() imageData: any[] = [];
  constructor() { }

  ngOnInit() {
  }

}
