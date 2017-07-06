import {Injectable} from '@angular/core';
import {Http, RequestMethod, RequestOptionsArgs, Headers, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";

const SERVER_URL: string = 'http://bla-bla-bla';
const SERVER_PREFIX_API: string = '/api';
const SERVER_TOKEN_NAME: string = 'Token';

@Injectable()
export class RrHttpService {
  private token: string;
  private sUrl: string;

  constructor(private http: Http) {
    this.sUrl = SERVER_URL + SERVER_PREFIX_API;
    this.setToken();
  }

  private setToken(): void {
    this.http.get(this.sUrl).map(resp => resp.json()).map(stream => stream.token)
      .subscribe(token => this.token = token);
  }

  private transformOptions(method: string | RequestMethod | null, options?: RequestOptionsArgs): RequestOptionsArgs {
    if (options) {
      options.method = method;
      if(!options.headers){
        options.headers = new Headers();
      }
      options.headers.append(SERVER_TOKEN_NAME, this.token);
      if (!options.headers.has('Content-Type')) {
        options.headers.append('Content-Type', 'application/json; charset=utf-8');
      }
      return options;
    } else {
      return <RequestOptionsArgs> {
        headers: new Headers({
          SERVER_TOKEN_NAME: this.token,
          'Content-Type': 'application/json; charset=utf-8'
        }),
        method: method
      };
    }

  }

  // REST CRUD
  public get(restMethod: string, options?: RequestOptionsArgs): Observable<Response> {
    return this.http.request(this.sUrl+'/'+restMethod,this.transformOptions(RequestMethod.Get,options));
  }

  public post(restMethod: string, options?: RequestOptionsArgs): Observable<Response> {
    return this.http.request(this.sUrl+'/'+restMethod,this.transformOptions(RequestMethod.Post,options));
  }

  public put(restMethod: string, options?: RequestOptionsArgs): Observable<Response> {
    return this.http.request(this.sUrl+'/'+restMethod,this.transformOptions(RequestMethod.Put,options));
  }

  public delete(restMethod: string, options?: RequestOptionsArgs): Observable<Response> {
    return this.http.request(this.sUrl+'/'+restMethod,this.transformOptions(RequestMethod.Delete,options));
  }

}
