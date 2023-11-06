import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_ENDPOINTS } from './config/endpoint.config';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get(API_ENDPOINTS.dashboard);
  }
}
