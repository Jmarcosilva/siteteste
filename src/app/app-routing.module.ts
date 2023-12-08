import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SobrenosComponent } from './components/sobrenos/sobrenos.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"sobrenos",component:SobrenosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
