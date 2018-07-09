import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  logged = false;
  isAuth() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.logged);
      }, 800);
    });
    return promise;
  }
  constructor() { }
  login() {
    this.logged = true;
  }
  logout() {
    this.logged = false;

  }
}
