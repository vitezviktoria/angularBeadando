import { Component, OnInit } from '@angular/core';
import { Service } from '../service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
  constructor(public service: Service) { }

  ngOnInit(): void {
    if (this.service.adatom == null || this.service.adatom.length === 0) {
      this.service.fetch().subscribe({
          next: (data: any) => this.service.adatom = data,
          error: error => console.log(error),
          complete: () => console.log(this.service.adatom)
        }
      );
    }

  }

  delete(adat: any): void
  {
    let index = this.service.adatom.indexOf(adat);
    this.service.adatom.splice(index,1);
  }
}
