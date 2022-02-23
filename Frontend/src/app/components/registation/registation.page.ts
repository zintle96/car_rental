import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarService } from 'src/app/services/car.service';
import { FormBuilder,Validators,FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-registation',
  templateUrl: './registation.page.html',
  styleUrls: ['./registation.page.scss'],
})
export class RegistationPage implements OnInit {
 formValue !:FormGroup
  name: any;
  LastName: any;
  email: any;
  password: any;
  

  constructor(private carservice: CarService, private formBuilder:FormBuilder) { }

  ngOnInit(): void { 
    this.formValue = this.formBuilder.group({
      name: new FormControl(),
      last_name: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      confirm_password: new FormControl(),
    });
  }

  onSubmit() {
    const data: any = {
      first_name: this.formValue.value.name,
      last_name:this.formValue.value.last_name,
      email: this.formValue.value.email,
      pwd: this.formValue.value.password
    }
    
    this.carservice.register(data).subscribe(res =>{
      console.log(res)
    });

     
  }
  

}
