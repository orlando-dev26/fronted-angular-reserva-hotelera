import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  private apiUrl = 'http://localhost:8082/api/hotels/available';

  constructor(private http: HttpClient) { }

  getAvailableHotels(startDate: string, endDate: string, cityId: number): Observable<any[]> {
    const url = `${this.apiUrl}?startDate=${startDate}&endDate=${endDate}&cityId=${cityId}`;
    return this.http.get<any[]>(url);
  }
}
