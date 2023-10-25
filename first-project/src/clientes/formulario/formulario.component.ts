import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  formCliente: FormGroup;
  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formCliente = this.formBuilder.group({
      nomeEspecs: this.formBuilder.array([this.createNomeEspecField()])
    });
  }

  get nomeEspecs(): FormArray {
    return this.formCliente.get('nomeEspecs') as FormArray;
  }

  createNomeEspecField(): FormGroup {
    return this.formBuilder.group({
      nomeEspec: ['', Validators.required]
    });
  }

  addNomeEspecField() {
    this.nomeEspecs.push(this.createNomeEspecField());
  }

 


  onSubmit() {
    console.log(this.formCliente.value);
  }

  

data = [
  {
    funcional: "987352015",
    nome: "leonardo",
    email: "leo@gmail.com"
  },
  {
    funcional: "32323222",
    nome: "luiz",
    email: "luiz@gmail.com"
  },
  {
    funcional: "99999999",
    nome: "jean",
    email: "jean@gmail.com"
  }
];
selectedClients: any[] = [];

isConsulted: boolean[] = [];


constaClient(index: number) {
  const funcionalToSearch = String(this.formCliente.value.nomeEspecs[index].nomeEspec);
  const found = this.data.find(dataItem => dataItem.funcional === funcionalToSearch);
  if (found) {
    this.isConsulted[index] = true;
    this.selectedClients[index] = found;
  } else {
    this.isConsulted[index] = false;
    this.selectedClients[index] = null;
  }
}


removeNomeEspecField(index: number) {
  this.nomeEspecs.removeAt(index);
  this.selectedClients.splice(index, 1);
  this.isConsulted.splice(index, 1);
}


}
