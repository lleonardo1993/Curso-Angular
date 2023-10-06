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

  removeNomeEspecField(index: number) {
    this.nomeEspecs.removeAt(index);
  }

  onSubmit() {
    console.log(this.formCliente.value);
  }
}
