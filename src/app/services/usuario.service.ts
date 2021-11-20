import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SQLite } from '@ionic-native/sqlite';
import { environment } from '../../environments/environment';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  token: string = null;
  constructor( private http: HttpClient, private sqlite: SQLite  ) { }

  login( email: string, password: string ){

    const data = { email, password };
    this.http.post(`${ URL }/user/login`, data).subscribe( resp => {
      console.log(resp);
    });
  }

}
