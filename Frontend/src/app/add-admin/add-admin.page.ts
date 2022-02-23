import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { CarService } from '../services/car.service';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.page.html',
  styleUrls: ['./add-admin.page.scss'],
})
export class AddAdminPage implements OnInit {
formValue !: FormGroup;
first_name: any;
last_name: any;
email: any;
pwd: any;

  constructor(private formBuilder: FormBuilder, private carservice: CarService) { }

  ngOnInit(): void{
    this.formValue = this.formBuilder.group({
      first_name: new FormControl(),
      last_name: new FormControl(),
      email: new FormControl(),
      pwd: new FormControl()
    })
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
