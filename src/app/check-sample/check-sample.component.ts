import {
   Component, OnInit,
    AfterContentChecked,
    AfterContentInit,
  AfterViewChecked,
AfterViewInit,
DoCheck,
OnDestroy} from '@angular/core';

@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrls: ['./check-sample.component.css']
})
export class CheckSampleComponent implements OnInit,
AfterContentChecked,
AfterContentInit,
AfterViewChecked,
AfterViewInit, DoCheck, OnDestroy {

  quantidade:number = 0;

  constructor() { }


  adicionar(){
    this.quantidade +=1;
  }

  remover(){
    this.quantidade -=1;
  }

//checked -> content -> view

//quando o primeiro conteudo é iniciado
ngAfterViewInit(): void {
  console.log('ngAfterViewInit');
}

  //depois que o conteudo é verificado ou inicialização da view
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }
 //depois que a view é verificada ou inicialização da view
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }
  ngDoCheck(): void {

    console.log('ngDoCheck');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }





  ngOnInit(): void {
    console.log('ngOnInit');
  }
  ngOnDestroy(): void {
   console.log('Foi destruido');
  }

}
