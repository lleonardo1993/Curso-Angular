// import { Component, OnInit } from '@angular/core';
// import { Cliente } from '../shared/cliente';
// import { FormBuilder, FormGroup } from '@angular/forms';
// import {ReactiveFormsModule , FormsModule } from '@angular/forms'
// @Component({
//   selector: 'app-formulario',
//   templateUrl: './formulario.component.html',
//   styleUrls: ['./formulario.component.scss']
// })
// export class FormularioComponent implements OnInit {
//   formCliente: FormGroup;
//   nomeEspec: string = "";

//   constructor(private formBuilder: FormBuilder) {
//     this.formCliente = this.formBuilder.group({
//       nomeEspec: ['']
//     })
//     this.formCliente = new FormGroup({
//       // Seus campos de formulário aqui
      
      
//     });
//   }
  

//    // pegarValor(){
//   //   if(valor){
//   //     let valor = this.formCliente.get('nomeEspec').value;

//   //   }
//   // }

//   ngOnInit() {
//     this.createForm(new Cliente());
//   }

//   createForm(cliente: Cliente) {
//     this.formCliente = this.formBuilder.group({
//       nome: [cliente.nome],
//       nomeEspec: [cliente.nomeEspec],
//       tipo: [cliente.tipo],
//       genero: [cliente.genero],
//       dataNascimento: [cliente.dataNascimento],
//       observacao: [cliente.observacao],
//       inativo: [cliente.inativo]
//     })
//   }

//   onSubmit() {
//     // aqui você pode implementar a logica para fazer seu formulário salvar
//     console.log(this.formCliente.value);
// debugger
//     // Usar o método reset para limpar os controles na tela
//     this.formCliente.reset(new Cliente());
//   }

//   createEspec(){
//     const getClass = document.querySelector(".addEspec");

// if (getClass) {
//   debugger
//     alert("entrou no if...");
    
//     const formGroup = document.createElement("div");
//     formGroup.className = "form-group";
    
//     const label = document.createElement("label");
//     label.setAttribute("for", "nome");
//     label.textContent = "Nome";
    
//     const input = document.createElement("input");
//     input.type = "text";
//     input.className = "form-control";
//     input.name = "nomeEspec";
//     input.id = "nomeEspec";
//     input.setAttribute("formControlName", "nomeEspec");
    
//     formGroup.appendChild(label);
//     formGroup.appendChild(input);
    
//     getClass.appendChild(formGroup);
//     console.log("dados ", getClass)
//   }
//  }
// }
