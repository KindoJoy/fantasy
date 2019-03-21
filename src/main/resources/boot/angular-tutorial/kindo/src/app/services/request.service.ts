import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor() { }

  rxjsGetData() {
    return new Observable<object>(observer => {
      setTimeout(() => {
        observer.next({ id: 1, name: 'Jugg' });
      }, 3000);
    });
  }

  rxjsGetIntervalData() {
    return new Observable<number>(observer => {
      let count = 0
      setInterval(() => {
        observer.next(++count);
      }, 1000);
    });
  }
}
