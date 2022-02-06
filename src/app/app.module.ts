import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './MyComponents/todo/todo.component';
import { TodoitemsComponent } from './MyComponents/todoitems/todoitems.component';
import { AddtodoComponent } from './MyComponents/addtodo/addtodo.component';
import { FormsModule } from '@angular/forms';
import { AboutusComponent } from './MyComponents/aboutus/aboutus.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoitemsComponent,
    AddtodoComponent,
    AboutusComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
