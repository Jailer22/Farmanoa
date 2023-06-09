import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubirarchivosService {

  constructor(private http:HttpClient) { 

  }
  
  subirarchivo(file: File,url:string,inputName:string){

    const formData = new FormData ();
    formData.append(inputName,file)

    const req = new HttpRequest('POST',url,formData,{
      reportProgress:true,
      responseType:'json'})

        return this.http.request(req)
  }
}
