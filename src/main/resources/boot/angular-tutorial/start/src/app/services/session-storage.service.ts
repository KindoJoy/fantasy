import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  constructor() { }

  set(key: string, value: object) {
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  get(key: string) {
    return JSON.parse(sessionStorage.getItem(key));
  }

  remove(key: string) {
    sessionStorage.removeItem(key);
  }
}
