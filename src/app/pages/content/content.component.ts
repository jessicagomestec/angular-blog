import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {dataFake} from '../../data/dataFake'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  @Input()
  photoCover:string = ""
  @Input()
  contentTitle:string = ""
  @Input()
  contentDesciption:string = ""
  private id:string | null = "0"






  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      value=>
       this.id = (value.get("id"))
    )
    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string | null){
    const result = dataFake.filter(
          article => article.id == id
  )[0]
//console.log(result)
    this.contentTitle = result.title
    this.contentDesciption = result.description
    this.photoCover = result.photoCover
  }

  getBackgroundColor(): string {
    return parseInt(this.id || '0') >= 5 ? 'white' : 'initial';
  }

  getColor(): string {
    return parseInt(this.id || '0') >= 5 ? 'black' : 'initial';
  }

}
