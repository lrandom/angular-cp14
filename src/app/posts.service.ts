import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PostsService {
  headers: HttpHeaders;
  constructor(
    public http: HttpClient
  ) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }


  get() {
    return this.http.get(environment.baseApiUrl, { headers: this.headers });
  }

  post(id) {
    return this.http.post(environment.baseApiUrl, { id: id });
  }

  upload() {
    let formData = new FormData();
    //formData.append('id', file); 
  }
}
