import { Injectable } from '@angular/core';

@Injectable({
 providedIn: 'root'
})
export class BrowserStorageService {
  
 getSession(key: string): any{                     //zasto funk vraca any(jer ne znamo sta je u storidzu???)
  //JSON.parse(sessionStorage.getItem(key)!);
  const data = sessionStorage.getItem(key);
  if(data){
   return JSON.parse(data)
  } else {
   return null
  }
 }

 setSession(key: string, value: any){
  const data = value === undefined ? '' : JSON.stringify(value);
  window.sessionStorage.setItem(key, data)
 }

 removeSession(key: string): void{
  window.sessionStorage.removeItem(key)
 }
}