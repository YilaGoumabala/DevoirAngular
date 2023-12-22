import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-tache',
  templateUrl: './list-tache.component.html',
  styleUrls: ['./list-tache.component.css']
})
export class ListTacheComponent implements OnInit {



  tachess: { id: number, titre: string, contenu: string, a: boolean }[] = [

    { id: 1, titre: 'tache1', contenu: 'faire la vaisselles', a: true },
    { id: 2, titre: 'tache2', contenu: 'donner la nouriture', a: false },
    { id: 3, titre: 'tache3', contenu: 'faire le linge', a: true },
    { id: 4, titre: 'tache4', contenu: 'faire la cuisine', a: false },
    { id: 5, titre: 'tache5', contenu: 'faire les exercices', a: true }
  ];




  taches!: any[]
  ngOnInit(): void {


    console.log(localStorage.getItem('taches'))
    if (localStorage.getItem('taches') == null)
      localStorage.setItem('taches', JSON.stringify(this.tachess));

    this.taches = JSON.parse(localStorage.getItem('taches')!);
  }

  supprimer(i: number): void {
    this.taches.splice(i, 1)
    localStorage.setItem('taches', JSON.stringify(this.taches));
  }



}
