import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { CarService } from '../services/car.service';

@Component({
  selector: 'app-deactivate-u',
  templateUrl: './deactivate-u.page.html',
  styleUrls: ['./deactivate-u.page.scss'],
})
export class DeactivateUPage implements OnInit {
formValue !: FormGroup;
userData: any;
  constructor(private formBuilder: FormBuilder, private service: CarService) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      first_name: new FormControl(),
      last_name: new FormControl(),
      email: new FormControl(),
      pwd: new FormControl()
  })
this.getAllUsers();
}

getAllUsers(){
  this.service.getUser().subscribe( res => {
    console.log(res);
    this.userData = res;

  })
}

deleteUser(row: any){
  this.service.deleteUser(row).subscribe(res => {
    alert("User Deleted!");
    this.getAllUsers();
  })
}
}
