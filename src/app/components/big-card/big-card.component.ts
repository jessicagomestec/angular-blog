import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {
  @Input()
  photoCover:string = ""
  @Input()
  cardTitle:string = "NOVO HOMEM DE FERRO ANUNCIOADO"
  @Input()
  cardDescription:string = "Descrição Marvel studio anuncia..."

  constructor() { }

  ngOnInit(): void {
  }

}
