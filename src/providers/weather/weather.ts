import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'


@Injectable()
export class WeatherProvider {

  apiKey = '792edda2dfca982c';
  url:any;
  
  constructor(public http: Http) {
    this.url='http://api.wunderground.com/api/'+this.apiKey+'/conditions/q'
  }

  getWeather( city, state ){
    return this.http.get(this.url + '/' + state + '/' + city + '.json' )
      .map(res => res.json())
  }

}
