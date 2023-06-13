import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit, OnChanges {

  @Input() public title: string = "Bem vindo!";

  ngOnInit(): void {
    
  }
  
  // Este evento é executado sempre que um valor de um controle de entrada dentro do componente é alterado.
  // Sempre que um componente recebe um dado através @Input() o ngOnChanges() é invocado
  ngOnChanges(): void {
    console.log("Foi alterado com sucesso!")
  }
}
