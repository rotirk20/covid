import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private country: BehaviorSubject<any> = new BehaviorSubject({});
  currentCountry = this.country.asObservable();
  baseUrl = 'https://corona.lmao.ninja/countries';
  worldUrl = 'https://corona.lmao.ninja';
  headers: HttpHeaders;
  options: { headers: any; };

  constructor(public http: HttpClient) {
    this.headers = new HttpHeaders({
      'x-rapidapi-key': '6557d7bfeamsh0e1d479244f2ae5p17c07ajsn52eb0818f628',
    });
    this.options = { headers: this.headers };
  }

  getByCountry(country) {
    const url = `${this.baseUrl}/${country}`;
    return this.http.get(url);
  }

  getAll() {
    const url = `${this.baseUrl}`;
    return this.http.get(url);
  }

  getWorldData() {
    const url = `${this.worldUrl}/all`;
    return this.http.get(url);
  }
}
