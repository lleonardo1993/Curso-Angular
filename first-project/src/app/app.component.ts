import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-title title="Olá Mundo"></app-title>
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {
  constructor() {}
  
  // ngOnInit Este evento é inicializado após o Angular exibir pela primeira vez as propriedades vinculadas aos dados
  // ou quando o componente foi inicializado. Este evento é usado principalmente para inicializar dados em um componente
  
  ngOnInit() : void {
    setTimeout(() => {
      console.log(1);
    }, 5000);
  }

  

}
