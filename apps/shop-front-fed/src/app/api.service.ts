import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private readonly http: HttpClient) { }

  get(url: string, params?: any): Observable<any> {
    return this.http.get(url, params)
  }

  post(url: string, params?: any): Observable<any> {
    return this.http.post(url, params)
  }

  delete(url: string, params?: any): Observable<any> {
    return this.http.delete(url, params)
  }

  put(url: string, params?: any): Observable<any> {
    return this.http.put(url, params)
  }

}
