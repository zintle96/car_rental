import { Component, OnInit } from '@angular/core';
import { Check } from '../services/chekout.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {

 
  public cars : any = [];
  public grandTotal !: number;
  

  constructor(private Checkout:Check) {}

  ngOnInit(): void {
    this.Checkout.getProducts()
    .subscribe(res=>{
      this.cars = res;
      this.grandTotal = this.Checkout.getTotalPrice();
    })
  }
  removeItem(item: any){
    this.Checkout.removeCartItem(item);
  }
  emptycart(){
    this.Checkout.removeAllCart();
  }
  
}
