import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAll(): Observable<Tema[]> {
    return this.http.get<Tema[]>('https://vikare.herokuapp.com/temas', this.token)
  }

  getByName(descricao: string): Observable<Tema> {
    return this.http.get<Tema>(`https://vikare.herokuapp.com/temas/topicos/${descricao}`, this.token)
  }

  getById(id: number): Observable<Tema> {
    return this.http.get<Tema>(`https://vikare.herokuapp.com/temas/topicos/${id}`, this.token)
  }

  postTema(tema: Tema): Observable<Tema> {
    return this.http.post<Tema>('https://vikare.herokuapp.com/temas', tema, this.token)
  }

  putTema(tema: Tema): Observable<Tema> {
    return this.http.put<Tema>('https://vikare.herokuapp.com/temas', tema, this.token)
  }

  deleteTema(id: number) {
    return this.http.delete(`https://vikare.herokuapp.com/temas/${id}`, this.token)
  }
}
