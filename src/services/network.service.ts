import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NetworkService {
  constructor(private httpClient: HttpClient) {}

  /**
   * make http get request function
   * @param url url to make get request
   * @param params params if applicable
   * @returns observable
   */
  makeGetRequest(url: string, params?: any) {
    // withFetch()
    return this.httpClient.get('/assets/data.json');
  }
}
