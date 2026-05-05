import { Component } from '@angular/core';
import { DpDatePickerModule } from 'ng2-date-picker';
import { HotelListing } from '../hotel-listing/hotel-listing';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [
    DpDatePickerModule,
    HotelListing,
    FormsModule,
    CommonModule
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  datePickerConfig = {
    format: 'YYYY-MM-DD',
  };

  startDate: string = '2024-11-03';
  endDate: string = '2024-11-07';
  cityInput: string = 'Santiago'; // Lo que escribes (ej. Santiago, California)
  showResults: boolean = false;

  onSearch() {
    if (this.cityInput.trim() === '') {
      alert('Por favor ingresa una ciudad');
      return;
    }
    this.showResults = true;
    console.log('Buscando... City:' + this.cityInput + ' Fechas:' + this.startDate + ' a ' + this.endDate);
  }
}
