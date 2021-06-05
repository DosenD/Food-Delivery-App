import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BrowserStorageService {
  getSession(key: string): any {
    // zasto funk vraca any(jer ne znamo sta je u storidzu???)
    const data = sessionStorage.getItem(key);
    if (data) {
      return JSON.parse(data);
    } else {
      return null;
    }
  }

  setSessionData(data: any): void {
    window.sessionStorage.setItem('cartItem', JSON.stringify(data));
  }

  setOrderItem(key:string, data:any){
   window.sessionStorage.setItem('orderItem', JSON.stringify(data))
  }

  removeItem(key: string): void {
    window.sessionStorage.removeItem(key);
  }
  removeSession() {
    window.sessionStorage.clear();
  }
}
