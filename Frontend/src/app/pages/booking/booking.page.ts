import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
})
export class BookingPage implements OnInit {
  // [x: string]: any;

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  confirm(){
    alert("Your booking is Successfull, press OK to Exit!")
  }
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }
  
}
