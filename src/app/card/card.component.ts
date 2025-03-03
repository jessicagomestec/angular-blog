import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  produtos:string[]=[]
  menuType:string[]=[]


  constructor() {
    this.produtos=[
      "mouse",
      "teclado",
      "monitor",
      "gabinete",
      "placa de video",
    ]
    this.menuType=[
      "user",
      "admin",
      "superuser",
    ]
   }

  ngOnInit(): void {
  }

  user(){
    this.menuType=[
      "user",]}
  admin(){
    this.menuType=[
      "admin",]}
  superuser(){
    this.menuType=[
      "superuser",]}

  adicionar(){
    this.produtos.push("novo produto")
  }

  remover(index:number){
    this.produtos.splice(index,1)

  }

  refazerlista(){
    this.produtos=[
      "mouse",
      "teclado",
      "monitor",
      "gabinete",
      "placa de video",
    ]
  }
}
