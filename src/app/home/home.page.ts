import { Component } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private iab: InAppBrowser, public alertController: AlertController) {

  }

  //browser buttons
  openBlank() {
    this.iab.create('https://ncrenfro.github.io/htmlPages/speech.html')
  }
  openSystem() {
    this.iab.create('https://ncrenfro.github.io/htmlPages/speech.html', '_system')
  }

  //Alert pop-ups
  helpAlert() {

    this.alertController.create({
      header: 'I need help',
      buttons: ['OK']
    }).then(res => {
      res.present();
    });

  }

  hurtAlert() {
    this.alertController.create({
      header: 'my',      
      inputs: [
        {
          type: 'radio',
          label: 'head hurts.',
        },
        {
          type: 'radio',
          label: 'torso hurts.',
        },
        {
          type: 'radio',
          label: 'arms hurt.',          
        },
        {
          type: 'radio',
          label: 'legs hurt.',
        }
      ],  
      buttons: ['OK']
    }).then(res => {
      res.present();
    });
  }

  bathroomAlert() {

    this.alertController.create({
      header: 'I need to go to the bathroom',
      buttons: ['OK']
    }).then(res => {
      res.present();
    });

  }
  hungryAlert() {

    this.alertController.create({
      header: 'I am hungry.',
      buttons: ['OK']
    }).then(res => {
      res.present();
    });

  }
  thirstyAlert() {

    this.alertController.create({
      header: 'I am thirsty.',
      buttons: ['OK']
    }).then(res => {
      res.present();
    });

  }
  tiredAlert() {

    this.alertController.create({
      header: 'I am tired.',
      buttons: ['OK'],
    }).then(res => {
      res.present();
    });

  }

}
