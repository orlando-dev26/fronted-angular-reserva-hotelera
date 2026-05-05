import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Hotels } from '../../../services/hotels';
import { Hotel } from '../../../interface/hotel';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hotel-listing',
  imports: [CommonModule],
  templateUrl: './hotel-listing.html',
  styleUrl: './hotel-listing.scss',
})
export class HotelListing implements OnInit, OnChanges {
  @Input() startDate!: string;
  @Input() endDate!: string;
  @Input() cityName!: string; // Ahora recibe el nombre (string)
  hotels: Hotel[] = [];

  constructor(private hotelsService: Hotels) {}

  ngOnInit() {
    if (this.startDate && this.endDate && this.cityName) {
      this.loadHotels();
    }
  }

  ngOnChanges() {
    if (this.startDate && this.endDate && this.cityName) {
      this.loadHotels();
    }
  }

  private loadHotels() {
    this.hotelsService.getHotels(this.startDate, this.endDate, this.cityName).subscribe({
      next: (data) => {
        this.hotels = data;
        console.log('Hoteles cargados:', this.hotels);
      },
      error: (err) => {
        console.error('Error al conectar con el microservicio:', err);
      }
    });
  }
}
