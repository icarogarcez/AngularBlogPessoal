import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { TemaComponent } from './tema/tema.component';
import { EditarTemaComponent } from './edit/editar-tema/editar-tema.component';
import { ApagarTemaComponent } from './delete/apagar-tema/apagar-tema.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'tema', component: TemaComponent },
  {path: 'editar-tema/:id' , component: EditarTemaComponent},
{path: 'apagar-tema/:id' , component: ApagarTemaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
