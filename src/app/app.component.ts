import { WeatherService } from './services/weather.service';
import { weatherData } from './models/weather.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private weatherService:WeatherService){

  }
  cityName :  string='wellington'
  weatherData?:weatherData;

  ngOnInit(): void {
    
  }
  onSubmit(){
    this.getWeartherData(this.cityName);
    this.cityName=' ';

  }
  private getWeatherData(cityName:string){
    this.weatherService.getWeatherData('Wellington').subscribe({next:(response)=>{
      console.log(response);
      this.weatherData=response;
    }})
  }
}
