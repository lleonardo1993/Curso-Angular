import { Component, OnInit,  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit } from '@angular/core';
/*
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit
*/
@Component({
  selector: 'app-root',
  template: `
   
   <app-title title="Olá Mundo"></app-title>
   {{valor}}
   <button (click)="adicionar()">Adicionar</button>
   <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit,  DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewChecked,
AfterViewInit {
  
  // variavel tipada com valor / number
  public valor: number = 1;

  // funcao tipada com tipo de retorno number
  public adicionar() : number{
    return this.valor += 1;
  }
  constructor() {}
  
  // ngOnInit Este evento é inicializado após o Angular exibir pela primeira vez as propriedades vinculadas aos dados
  // ou quando o componente foi inicializado. Este evento é usado principalmente para inicializar dados em um componente
  
  ngOnInit() : void {
    setTimeout(() => {
      console.log(1);
    }, 5000);
  }
  // ngDoCheck: fica verificando se tem alguma alteração
  ngDoCheck(): void {
    console.log("ngDoCheck")    
  }
  // ngAfterContentInit: método chamado quando renderizado a pagina
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit")    
  }  
  // ngAfterContentChecked: quando valor alterado invoca o método 
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked")  
  }
  // ngAfterViewInit: sempre que renderizado o valor na view é chamado o método
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit")  
  } 

  // ngAfterViewChecked: método chamado quando renderizado a pagina
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked")  
  }
}
