import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  formValue !: FormGroup;
  carModelObj: Car = new Car();
  carData : any;

  constructor(private formBuilder: FormBuilder,public modalController:ModalController, private service: CarService) { }

  ngOnInit():  void {
    this.formValue = this.formBuilder.group({
      v_name: new FormControl(),
      v_brand: new FormControl(),
      rent_price: new FormControl(),
      yr_model: new FormControl(),
      v_img: new FormControl(),
      pick_up_area: new FormControl(),
      pick_up_date: new FormControl(),
      pick_up_time: new FormControl(),
      drop_off_area: new FormControl(),
      drop_off_date: new FormControl(),
      drop_off_time: new FormControl()
    })
    this.getAllCars();
  }
clickAddCar(){
this.formValue.reset();
}
addCarDetails() {
  this.service.addCar(this.formValue.value).subscribe(res => {
    console.log(res);
    alert("Car Added Successfully")
    this.getAllCars();

  },
  err => {alert("Something went wrong");
})
}

getAllCars(){
  this.service.getCar().subscribe(res => {
    console.log(res)
    this.carData = res;
  })
}
updateCarDetails() {
  this.carModelObj.v_brand =  this.formValue.value.bv_rand;
  this.carModelObj.v_name =  this.formValue.value.v_name;
  this.carModelObj.rent_price =  this.formValue.value.rent_price;
  this.carModelObj.yr_model =  this.formValue.value.yr_model;
  this.carModelObj.v_img =  this.formValue.value.v_img;

  this.service.updateCar(this.carModelObj, this.carModelObj.id)
  .subscribe(res => {
    alert("Updated Successfully!");
    this.formValue.reset();
    this.getAllCars();
  })
}

deleteCar(row: any) {
  this.service.deleteCar(row.id).subscribe(res => {
    alert("Car Deleted Successfully!");
    this.getAllCars();
  })
}

  exit() {
    this.modalController.dismiss(

    );
    console.log('pressed');
  }
}
