import { Component, OnInit } from '@angular/core';
import { CheckoutPage } from '../checkout/checkout.page';
import { CarService } from '../services/car.service';

@Component({
  selector: 'app-corolla',
  templateUrl: './corolla.page.html',
  styleUrls: ['./corolla.page.scss'],
})
export class CorollaPage implements OnInit {
  carService: any;
  filterCategory: any;
  carList: any;

  constructor(private carservice:CarService) { }

  ngOnInit() {
  }
  addtocart(cars:any){
    this.carservice.addtoCart(cars);
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
