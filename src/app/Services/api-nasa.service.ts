import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiNasaService {

  private apiKey = "3eiDH0DbcEeRliNxdzRHBPkXqOooTZ7tZEHvYujd";
  private routeApi = "https://api.nasa.gov/neo/rest/v1/";

  constructor(private http: HttpClient) { }

  getSpacialObjects(startDate:string,endDate:string) {
    let route = this.routeApi + "feed?start_date="+startDate+"&end_date="+endDate+"&api_key="+this.apiKey;
    return new Promise((resolve, reject) => {
      this.http.get(route).toPromise()
        .then(
          res => {
            resolve(res);
          }
        ).catch(error => {
          reject(error);
        })
    });
  }

  getDetailObject(idObject:string) {
    let route = this.routeApi + "neo/"+idObject+"?api_key="+this.apiKey;
    return new Promise((resolve, reject) => {
      this.http.get(route).toPromise()
        .then(
          res => {
            resolve(res);
          }
        ).catch(error => {
          reject(error);
        })
    });
  }
}
