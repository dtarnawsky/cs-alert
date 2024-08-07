import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, AlertController } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonButton, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {
  constructor(private alertCtrl: AlertController) { }

  async showAlert() {
    let alert = await this.alertCtrl.create({
      header: `My Header`,
      backdropDismiss: false,
      translucent: true,
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => { },
          htmlAttributes: { 'aria-label': "Nah" }
        },
        {
          text: `Yes`,
          handler: () => {
            console.log('Done');
          },
          htmlAttributes: { 'aria-label': 'Yeah' }
        },
      ],
    });
    alert.present();
  }
}

