import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.page.html',
  styleUrls: ['./add-admin.page.scss'],
})
export class AddAdminPage implements OnInit {
formValue !: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void{
    this.formValue = this.formBuilder.group({
      first_name: new FormControl(),
      last_name: new FormControl(),
      email: new FormControl(),
      password: new FormControl()
    })
  }

}
