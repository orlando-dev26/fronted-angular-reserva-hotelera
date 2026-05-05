export interface Hotel {
  id: number;
  name: string;
  price: number;
  description: string;
  picture: string;
  street: string;
  number: string;
  cityName: string;
  services: Array<{ serviceId: number; serviceName: string }>;
  averageCalification: number;
}
