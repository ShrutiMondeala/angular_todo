import { TodoComponent } from './MyComponents/todo/todo.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './MyComponents/aboutus/aboutus.component';


const routes: Routes = [
  {path: 'home', component: TodoComponent},
  {path: 'aboutus', component: AboutusComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
