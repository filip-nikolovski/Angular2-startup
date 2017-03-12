import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/map';




@Injectable()
export class HttpRequestService {

  constructor(private http: Http) { }

  // TODO: create separate enum or separate static class with static values 
  private baseUrl: string = "http://localhost:52952/api/";

  get(url: string): Observable<Object>{
  	return this.http.get(this.baseUrl + url)
  					.map(this.extractData)
  					.catch(this.handleError)
  					.finally(() => this.hideSpinner);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || { };
    // return body.data || { };
  }

  private handleError (error: Response | any) {
    
    // TODO: use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      // const body = error.json() || '';
      // const err = body.error || JSON.stringify(body);
      const err = JSON.stringify(error);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }


  private hideSpinner(){
  	//hide the spinner
  }


}
