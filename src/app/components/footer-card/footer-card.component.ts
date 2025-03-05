import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer-card',
  templateUrl: './footer-card.component.html',
  styleUrls: ['./footer-card.component.css']
})
export class FooterCardComponent implements OnInit {

   @Input()
    photoCover:string = ""
    @Input()
    cardTitle:string = "NOVO HOMEM DE FERRO ANUNCIOADO"
    @Input()
    cardDescription:string = "Descrição Marvel studio anuncia..."
    @Input()
    Id:string="0"

  constructor() { }

  ngOnInit(): void {
  }

}
