import { Component } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  nombre: string = "";
  paterno: string = "";
  materno: string = "";
  fecha_nacimiento: string = "";

  respuesta: string = "";
  constructor(private http: HttpClient) {}

  guardar(){
    const url="";
    const headers= new HttpHeaders({
      'Content-Type' : 'application/json'
    });

    const body = {
      nombre: this.nombre,
      paterno: this.paterno,
      materno: this.materno,
      fecha_nacimiento: this.fecha_nacimiento
    };

    this.http.post(url,body,{headers}).subscribe(
      response => {
        this.respuesta = 'Respuesta API: ' + response;
      },
      error => {
        this.respuesta = 'Error API' + error;
      }
    );

  }
}
