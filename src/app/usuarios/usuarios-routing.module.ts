import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TablaUsuariosComponent } from './tabla-usuarios/tabla-usuarios.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'usuarios'
  },
  {
    path:'usuarios',
    component: TablaUsuariosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
