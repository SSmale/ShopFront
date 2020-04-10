import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private readonly http: HttpClient) {}

  get(url: string): Observable<any> {
    return this.http.get(url);
  }

  post(url: string, body?: any): Observable<any> {
    return this.http.post(url, body);
  }

  delete(url: string): Observable<any> {
    return this.http.delete(url);
  }

  put(url: string, body?: any): Observable<any> {
    return this.http.put(url, body);
  }
}
