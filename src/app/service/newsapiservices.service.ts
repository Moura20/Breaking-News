import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http:HttpClient) { }


  newsApiUrl = "https://newsapi.org/v2/top-headlines?country=in&apiKey=aaed5a5eb6504be4b5810511e6180b96";

  techApiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=aaed5a5eb6504be4b5810511e6180b96";

  businessApiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=aaed5a5eb6504be4b5810511e6180b96";

  sportsnewsApiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=aaed5a5eb6504be4b5810511e6180b96";

  


  topHeading():Observable<any>
  {
    return this._http.get(this.newsApiUrl);
  }

  techNews():Observable<any>
  {
    return this._http.get(this.techApiUrl);
  }

  businessNews():Observable<any>
  {
    return this._http.get(this.businessApiUrl);
  }
 

  sportsNews():Observable<any>
  {
    return this._http.get(this.sportsnewsApiUrl);
  }
}
