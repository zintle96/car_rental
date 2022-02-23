import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl ,NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Update } from '../models/update';
import { UpdateService } from '../services/update.service';

@Component({
  selector: 'app-userp',
  templateUrl: './userp.page.html',
  styleUrls: ['./userp.page.scss'],
})
export class UserpPage implements OnInit { 
  password !: any;
  updateForm !: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router, private service: UpdateService ) { }

  ngOnInit():void {
      this.updateForm=this.formBuilder.group({
        first_name: new FormControl(),
        last_name:new FormControl(),
        email: new FormControl()
      })

      this.password=this.formBuilder.group({
        password:new FormControl()
      })
     
    }

      // ngUpdate(){
      //   this.http.post<any>("/update", this.updateForm.value).subscribe(res => {
      //     alert("Update Successful");
      //   })

      //}

}