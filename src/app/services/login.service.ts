import { Injectable } from '@angular/core';
import { Employee } from './User.model';

import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';
import { User } from 'firebase';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  formdata: Employee;
  user$: string;

  constructor(public toastController: ToastController,
              public firestore: AngularFirestore, public Auth: AngularFireAuth, public router: Router) {
    this.Auth.authState.subscribe(user => {
      if (user) {
        this.user$ = user.email;
        localStorage.setItem('user', JSON.stringify(this.user$));
      } else {
        localStorage.setItem('user', null);
      }
    });
  }

  async  login(email: string, password: string) {
    console.log(email, password);

    try {
      await this.Auth.auth.signInWithEmailAndPassword(email, password);
      this.presentToastWithOptions();
      this.router.navigate(['/user']);
    } catch (e) {
      alert('Error!' + e.message);
    }
  }
  async signOut() {
    await this.Auth.auth.signOut();
    return this.router.navigate(['/']);
  }
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return user !== null;
  }
  getEmployee() {
    return this.firestore.collection('employee').snapshotChanges();
  }

  async presentToastWithOptions() {
    const toast = await this.toastController.create({
      header: 'Toast header',
      message: 'Click to Close',
      position: 'top',
      buttons: [
        {
          side: 'start',
          icon: 'star',
          text: 'Favorite',
          handler: () => {
            console.log('Favorite clicked');
          }
        }, {
          text: 'Done',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    toast.present();
  }

}
