/**
 * Created by Vlad on 12/21/2016.
 */
import {Injectable, EventEmitter} from '@angular/core';
import {
  Http, Response, Headers, RequestOptions, CookieXSRFStrategy, XSRFStrategy,
  ResponseContentType,
} from '@angular/http';
import {Observable}     from 'rxjs/Observable';
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {mapUserExt, SOAuthenticateResponse, SOvAccount, VOUser, VOUserExt} from "./vouser";
import {Subject} from 'rxjs/Subject';
import {VOSettings} from "../models/vos";




@Injectable()
export class AuthHttpMy {
  //auth:string;
  headers: Headers;

  private isLogedInSub:BehaviorSubject<boolean>
  isLogedIn$:Observable<boolean>;


  private userSub: BehaviorSubject<VOUser>;
  user$: Observable<VOUserExt>;

  private user: VOUser;
  userExt: VOUserExt = new VOUserExt();


  private userSubS: BehaviorSubject<any>;
  userS$: Observable<any>;
//
  //{"id":16,"username":"al3kosvh@gmail.com","sessionId":"ILO5TXx1Gf5jpXn8UZMV"}

  //authenticatedSub: Subject<boolean>;
  //authenticated$: Observable<boolean>;

  constructor(private http: Http) {

    this.isLogedInSub = new BehaviorSubject(false);
    this.isLogedIn$ = this.isLogedInSub.asObservable();

   // this.authenticatedSub = new BehaviorSubject<boolean>(false);
    //this.authenticated$ = this.authenticatedSub.asObservable();

    this.userSub = new BehaviorSubject<VOUser>(this.userExt);
    this.user$ = this.userSub.asObservable();


    this.userSubS = new BehaviorSubject<any>(null);
    this.userS$ = this.userSubS.asObservable();

    this.autoLogin();
  }

  autoLogin(): void {
    let user: VOUser = this.getUser();
    //TODO if expired error
    console.log(user);
    if(!this.user){
      return;
    }
    if(user) this.loginUser(user);
    this.getUsersExtended(user).subscribe(user => {
      //console.log(user);
      this.userSub.next(user);
    });

  }

  convertSessionToToken() {

    let url: string = VOSettings.server + 'session-to-token' + VOSettings.format_json;
    this.http.post(url, {}).toPromise().then(res => console.log('session-to-token:', res));
  }

  logout() {

    let url: string = VOSettings.server + '/logout?format=json';
    this.get(url).map(res=>res.json()).subscribe(res=>{

      this.isLogedInSub.next(false);
    })

    //localStorage.removeItem("account");
  }


  login(username: string, password: string): Observable<VOUserExt> {

    let sub: Subject<VOUserExt> = new Subject();

    // let url: string = 'http://ec2-34-209-89-37.us-west-2.compute.amazonaws.com/api/v1/auth?format=json';
    let url: string = VOSettings.server + '/auth?format=json';

    console.log(username, password);
//console.log(this.http.post(url, {username,password}));
    this.post(url, {username, password}).map(res => {
      let r: SOAuthenticateResponse = res.json();
      //console.log(r);

      let user: VOUser = new VOUser();
      user.id = r.UserId;
      user.sessionId = r.SessionId;
      user.username = username;
      user.password = password;
      user.token = r.SessionId;
      return user;
    }).catch(this.handleError).subscribe(user => {

      ///TODO make sure user is valid


      this.loginUser(user);
      this.saveUser();

      this.getUsersExtended(user).subscribe(
        user => {
          sub.next(user);
          this.userSub.next(user);
        }
      )

    });

    return sub.asObservable();

  }

  getUsersExtended(user: VOUser) {
    // let url: string = 'http://ec2-34-209-89-37.us-west-2.compute.amazonaws.com/api/v1/profiles/me?format=json';
    let url: string = VOSettings.myProfile;
    return this.get(url)
      .map(res => {
       // console.warn('  getUsersExtended', res.json());
        let r: any = res.json();
        this.userSubS.next(r)
       // console.log(r);
        let out: VOUser = mapUserExt(r);
        // out.id = r.Id;
        // out.role =1;
        // out.userName = r.userName;
        // out.PrimaryEmail = r.PrimaryEmail;
        // out.displayName = r.displayName;
        // out.profile_pic = r.profile_pic;
        // out.jobtitle = r.jobtitle;
        // out.company = r.company;
        // out.firstName = r.firstName;
        // out.lastName = r.lastName;
        // out.occupation = r.occupation;
        // out.offers = r.offers;
        // out.needs = r.needs;
        // out.numberOfOpps = r.numberOfOpps;

        // console.log('profile ', res);
        //console.log('out ', out);
        return out;
      })
      .catch(this.handleError)

  }

  handleError(error: any) {
    console.log(error);
    //this.id++;
    // if(this.id<1000) this.loadProfile();
    let errMsg = (error.message) ? error.message :
      console.error(error);
    return Observable.throw(errMsg);
  }


  getUser(): VOUser {
    // if(!this.us)
    if (!this.user) {
      let str = localStorage.getItem('authentication');
      try {
        if (str) this.user = JSON.parse(atob(str));  //   new VOUser(JSON.parse(atob(str)));
      } catch (e) {
        this.removeAuthentication();
      }
    }
    return this.user;
  }

  saveUser(): void {
    localStorage.setItem('authentication', btoa(JSON.stringify(this.user)));
    //this.authenticatedSub.next(true);
  }

  loginUser(user?: VOUser){
    this.user = user
    this.isLogedInSub.next(true);
  }
  getToken(): string {
    let user: VOUser = this.getUser();
    return user ? user.token : null;
  }

  getHeaders(): any {
    if (!this.headers) {
      this.headers = new Headers();
      let token: string = this.getToken();
      // console.log('token' , token);

      if (token) {
        this.headers.append('Authorization', token);
        // this.headers.append('token', token);
      }
      // this.headers.append('withCredentials','true');
    }
    return this.headers;
  }

  /*  isUser():boolean{
   let user = this.getUser();
   return (user && user.id)?true:false;
   }*/

  removeAuthentication(): void {
    this.userExt = null;
    this.isLogedInSub.next(false);
    //this.authenticatedSub.next(false);
    localStorage.removeItem('authentication');
  }


  addHeaders(options: any): any {
    if (options) options.headers ? options.headers.append('Authorization', this.getToken()) : options.headers = this.getHeaders();
    else options = {headers: this.getHeaders(), withCredentials: true};
    // console.log(options);
    return options;


  }

  public get(url: string, options?: RequestOptions): Observable<Response> {

    return this.http.get(url, this.addHeaders(options));
  }

  public post(url: string, body: any, options?: RequestOptions): Observable<Response> {
    return this.http.post(url, body, this.addHeaders(options));
  }

  public put(url: string, body: any, options?: RequestOptions): Observable<Response> {
    return this.http.put(url, body, this.addHeaders(options));
  }

  public delete(url: string, options?: RequestOptions): Observable<Response> {
    return this.http.delete(url, this.addHeaders(options));
  }

  public patch(url: string, body: any, options?: RequestOptions): Observable<Response> {
    return this.http.patch(url, this.addHeaders(options));
  }

  public head(url: string, options?: RequestOptions): Observable<Response> {
    return this.http.head(url, this.addHeaders(options));
  }

  public options(url: string, options?: RequestOptions): Observable<Response> {
    return this.http.options(url, this.addHeaders(options));
  }


}
