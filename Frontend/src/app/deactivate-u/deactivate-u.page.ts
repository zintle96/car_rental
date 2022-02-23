import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-deactivate-u',
  templateUrl: './deactivate-u.page.html',
  styleUrls: ['./deactivate-u.page.scss'],
})
export class DeactivateUPage implements OnInit {
formValue !: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      first_name: new FormControl(),
      last_name: new FormControl(),
      email: new FormControl(),
      password: new FormControl()
  })
// this.getAllUsers();
}
}
