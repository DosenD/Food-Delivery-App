import { Injectable } from '@angular/core';

@Injectable({
 providedIn: 'root'
})
export class BrowserStorageService {
  
 getSession(key: string): any{                     //zasto funk vraca any(jer ne znamo sta je u storidzu???)
  const data = sessionStorage.getItem(key);
  if(data){
   return JSON.parse(data)
  } else {
   return null
  }
 }

 setSessionData(data:any){
  window.sessionStorage.setItem('cartItem', JSON.stringify(data))
 }

 removeSession(key: string): void{
  window.sessionStorage.removeItem(key)
 }
}