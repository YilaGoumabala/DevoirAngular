import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-tache',
  templateUrl: './add-tache.component.html',
  styleUrls: ['./add-tache.component.css']
})
export class AddTacheComponent implements OnInit {

  tache = { id: 0, titre: "", contenu: '', a: false };
  taches!: any[];

  ngOnInit(): void {
    this.taches = JSON.parse(localStorage.getItem('taches')!);
    console.log(this.taches)
  }
  save(): void {
    if (this.taches.length == 0) {
      this.tache.id = 1
      this.taches = [];
    } else {
      this.tache.id = parseInt(this.taches[this.taches.length - 1].id) + 1
    }

    this.taches.push(this.tache);
    localStorage.setItem("taches", JSON.stringify(this.taches))
    console.log(this.taches)
    window.history.back()
  }

}
