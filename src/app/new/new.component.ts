import { Component, OnInit } from '@angular/core';
import { Service } from "../service";
import { DataIn } from "../datamodel";

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})

export class NewComponent implements OnInit {
  adat = new DataIn();

  constructor(private service: Service) { }

  ngOnInit(): void { }

  save(): void {
    this.service.adatom.push(this.adat);
    this.adat = new DataIn();
  }
}
