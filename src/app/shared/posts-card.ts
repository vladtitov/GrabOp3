/**
 * Created by Vlad on 9/10/2016.
 */
import {Component, OnInit, Input} from "@angular/core";
import {VOPost} from '../models/vos';
//import {VOService} from "../models/vos";


@Component({
    selector: 'posts-card',
    template: `
<div class="posts-card text-xs-center"> 
        <div class="card-{{size}}">
            <div class="thumb-{{size}}" [class.selected]="my_item.selected">
                <div class="image-container-{{size}}">
                    <img class="image-{{size}}" src="{{urlIMG}}" />
                    <div class="num s40x40 round"><span>{{my_item.id}}</span></div>
                    <div [userClass]="'accountIMG'" [my-md-image]="imgURL" [size]="'70x70'"> </div>
                </div>
                <div class="info pos-bottom">
                    <div class="deviceText-{{size}}">
                        <span>{{my_item.title}}</span>
                    </div>
                    <!--<div class="row">-->
                        <div class="col-sm-7">
                            <table style="height: 102px;">
                              <tbody>
                                <tr>
                                    <td class="align-middle">
                                        <span>{{my_item.city}}, </span>
                                        <span>{{my_item.province}}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="align-bottom">
                                        <i class="fa fa-exchange" aria-hidden="true"></i>
                                        <i class="fa fa-users" aria-hidden="true"></i>
                                        <i class="fa fa-heart" aria-hidden="true"></i>
                                        <i class="fa fa-graduation-cap" aria-hidden="true"></i>
                                        <i class="fa fa-tag fa-flip-horizontal" aria-hidden="true"></i>
                                    </td>
                                </tr>
                              </tbody>
                            </table>
                        </div>
                        <div class="col-sm-5 bl" style="line-height: 1.1;">
                            <div class="row"><div class="col-sm-12"><span class="pull-right">comm</span></div></div>
                            <div class="row"><div class="col-sm-12 text-warning"><span class="pull-right">{{my_item.commission}}</span></div></div>
                            <div class="row"><div class="col-sm-12"><span class="pull-right">fixed rate</span></div></div>
                            <div class="row"><div class="col-sm-12 text-warning"><span class="pull-right"><span>$</span>{{my_item.fixed}}</span></div></div>
                            <div class="row"><div class="col-sm-12"><span class="pull-right">hourly rate</span></div></div>
                            <div class="row"><div class="col-sm-12 text-warning"><span class="pull-right"><span>$</span>{{my_item.hourlyRate}}</span></div></div>
                        </div>
                    <!--</div>-->
                </div>
            </div>
        </div>
        
        <!--<div class="card-{{size}}">
            <div class="thumb-{{size}}">
                <div class="image-container-{{size}}">
                        <img class="image-{{size}}" src="{{my_item.image}}" />
                </div>
                <div class="myid"><span>{{my_item.id}}</span></div>
                <div class="info pos-bottom">
                    <div class="deviceText-{{size}}"><span>{{my_item.title}}</span></div>
                </div>
            </div>
        </div>-->

</div>
`
})
export class PostsCard implements OnInit {

    @Input() my_item: VOPost;

    urlIMG = 'img/pic05-300x195.jpg';
    imgURL = 'url(img/ingeniero.jpg)';
    // imgURL = 'url(img/img-girl.jpg)';
    size: number = 256;
    // size:number= 128;
    constructor() {

    }

    ngOnInit(): void {

    }

    loadServices(): void {

    }

}
