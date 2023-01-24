import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { weatherData } from '../models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(
    private http: HttpClient
  ) { }
  
  getWeatherData(cityName: string): Observable<weatherData> {
    return this.http.get<weatherData>(environment.weatherApiBaseUrl,{
      headers: new  HttpHeaders()
      .set(environment.XRapidAPIHostHeaderValue, environment.XRapidAPIHostHeaderValue)
      .set(environment.XRapidAPIKeyHeaderValue,environment.XRapidAPIKeyHeaderValue),
      params: new HttpParams()
      .set('q',cityName)
      .set('units','metric')
      .set('mode','json')
    })
  }
}
