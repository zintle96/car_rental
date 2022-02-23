import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-models',
  templateUrl: './models.page.html',
  styleUrls: ['./models.page.scss'],
})
export class ModelsPage implements OnInit {
  carData: any;
  carService: any;
  filterCategory: any;
  carList: any;

  constructor( private carservice: CarService) { }

  ngOnInit() {

   this.getAllCars()
    }
     getAllCars(){
      this.carservice.getCar().subscribe(res => {
        console.log(res)
        this.carData = res;
      })
      
  }
  addtoCart(cars: any): void{
    this.carService.addtoCart(cars);
    return this.carService
  }
  filter(category:string){
    this.filterCategory = this.carList
    .filter((a:any)=>{
      if(a.category == category || category==''){
        return a;
      }
    })
  }


}
