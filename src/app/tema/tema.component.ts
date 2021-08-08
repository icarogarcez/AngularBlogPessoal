import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tema } from '../model/Tema';
import { TemaService } from '../service/tema.service';
import { environment } from 'src/environments/environment.prod';


@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css']
})
export class TemaComponent implements OnInit {
  tema: Tema = new Tema()
  allTema: Tema[]

  constructor(
    private temaService: TemaService,
    private router: Router
  ) { }

  ngOnInit() {

    if (environment.token == '') {
      alert('Sua sessão expirou, faça o login novamente.');
      this.router.navigate(['/login']);
    }

    this.getAllTemas()
  }

  getAllTemas() {
    this.temaService.getAll().subscribe((resp: Tema[]) => {
      this.allTema = resp
    })
  }

  cadastrar() {
    this.temaService.postTema(this.tema).subscribe((resp: Tema) => {
      this.tema = resp
      alert('Seu tema foi cadastrado. 🎲')
      this.getAllTemas()
      this.tema = new Tema()
    })
  }
}
