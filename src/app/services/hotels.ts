import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hotel } from '../interface/hotel';

@Injectable({
  providedIn: 'root',
})
export class Hotels {
  private apiUrl = 'http://localhost:8082/api/hotels/available';

  constructor(private http: HttpClient) {}

  getHotels(startDate: string, endDate: string, cityName: string) {
    return this.http.get<Hotel[]>(
      `${this.apiUrl}?startDate=${startDate}&endDate=${endDate}&cityName=${cityName}`,
    );
  }
}
