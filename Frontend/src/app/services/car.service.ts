import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  storage: any;

  constructor(private http: HttpClient) { }
  checkItems:any = [];

  getCar(){
    return this.http.get<any>("https://backend-car-rentals.herokuapp.com/api/car-rentals/cars").pipe(map((res: any) => {
      //console.log(res)
      return res;
    })
    )}
    getcarbyid(id:any){
      return this.http.get<any>(`https://backend-car-rentals.herokuapp.com/api/car-rentals/cars/${id}`).pipe(map((res: any) => {
        //console.log(res)
        return res;
      }))
    }

  addCar(data: any){
    return this.http.post<any>("http://localhost:3000/posts", data).pipe(map((res => {
      return res;
    })))
  }

  register(data: any){
    return this.http.post<any>("https://backend-car-rentals.herokuapp.com/api/car-rentals/register", data, {withCredentials: true}).pipe(map((res => {
      return res;
    })))
  }
  login(data: any){
    return this.http.post<any>("https://backend-car-rentals.herokuapp.com/api/car-rentals/login", data, {withCredentials: true}).pipe(map((res => {
      return res;
      
    })))
  }
  updateCar(data: any, id: any){
    return this.http.put<any>("http://localhost:3000/posts/" +id, data)
    .pipe(map((res:any) => {
      return res;
    }))
  }

deleteCar(id: any) {
  return this.http.delete<any>("" + id).pipe(map((res: any) => {
  return res;
  }))
}
addtoCart(string: any) {
  this.checkItems.push(string)
  return this.checkItems;
}

// getUser(): Promise<string> {
//   return this.http.get('user').then((value) => {
//     return value;
//   });
// }

}
