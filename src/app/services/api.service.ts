import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ApiResponse } from '../@types/globalTypes';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseURL = "https://api.postalpincode.in"
  httpClient = inject(HttpClient)
  
  constructor() { }

  getPincodeDetails(pincode: number) {
    return this.httpClient.get<ApiResponse>(`${this.baseURL}/pincode/${pincode}`)
  }
}
