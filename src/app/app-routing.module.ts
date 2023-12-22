import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddTacheComponent } from './add-tache/add-tache.component';
import { EditTacheComponent } from './edit-tache/edit-tache.component';
import { ListTacheComponent } from './list-tache/list-tache.component';
const routes: Routes = [
  { path: '', pathMatch: "full", redirectTo: "tache" },
  { path: 'tache', component: ListTacheComponent },
  { path: 'tache/ajouter', component: AddTacheComponent },

  { path: 'tache/modifier/:id', component: EditTacheComponent },





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
