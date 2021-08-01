import { Router } from '@angular/router';
import { AuthService } from './../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { UsuarioLogin } from '../model/usuarioLogin';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  usuarioLogin: UsuarioLogin = new UsuarioLogin()

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {
    window.scroll(0, 0)
  }

  entrar() {
    this.auth.entrar(this.usuarioLogin).subscribe(
      (resp: UsuarioLogin) => {
        this.usuarioLogin = resp

        environment.token= this.usuarioLogin.token
        environment.nome= this.usuarioLogin.nome
        environment.foto= this.usuarioLogin.foto
        environment.id= this.usuarioLogin.id

        this.router.navigate(['/inicio'])
      },
      erro =>{
        if (erro.status == 500 || 401){
          alert('Usuário ou senha incorretos.')
        }
      }
    )
  }
}
