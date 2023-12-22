import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edit-tache',
  templateUrl: './edit-tache.component.html',
  styleUrls: ['./edit-tache.component.css']
})
export class EditTacheComponent implements OnInit {

  id!: string
  tache: any
  taches!: any[];
  constructor(private activatedRoute: ActivatedRoute) { }
  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id')!
    this.taches = JSON.parse(localStorage.getItem('taches')!);
    for (let index = 0; index < this.taches.length; index++) {
      if (this.taches[index].id == this.id) {
        this.tache = this.taches[index];

        return
      }


    }
  }
  save(): void {
    console.log(this.taches)
    for (let index = 0; index < this.taches.length; index++) {
      if (this.taches[index].id == this.id) {
        this.taches[index] = this.tache;
      }
    }
    console.log(this.taches)
    localStorage.setItem("taches", JSON.stringify(this.taches))
    console.log(this.taches)

    window.history.back()

  }


}
