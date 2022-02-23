import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-uppass',
  templateUrl: './uppass.page.html',
  styleUrls: ['./uppass.page.scss'],
})
export class UppassPage implements OnInit {
  password: any;
  
  updateForm: any;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit():void {
    

    this.password=this.formBuilder.group({
      password:new FormControl()
    })
  }

}
