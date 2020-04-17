import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDatatableComponent } from './components/user-datatable/user-datatable.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'datatable', component: UserDatatableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
