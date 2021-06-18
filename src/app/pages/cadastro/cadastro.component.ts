import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { NgBrazilValidators } from 'ng-brazil';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  form: any = FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.form = this.formBuilder.group({
      nome: ['', Validators.required],
      cpf: ['', [Validators.required, NgBrazilValidators.cpf]],
      email: ['', [Validators.required, Validators.email]],
      celular: ['', [Validators.required, NgBrazilValidators.celular]],
      cnpj: ['', [Validators.required, NgBrazilValidators.cnpj]],
      razaoSocial: ['', Validators.required],
      cep: ['', [Validators.required, NgBrazilValidators.cep]],
      endereco: ['', Validators.required],
      numero: [''],
      complemento: [''],
      bairro: ['', Validators.required],
      cidade: ['', Validators.required],
      estado: ['', Validators.required]
    });
  }

  ngOnInit(): void {

  }

  get nome() {
    return this.form.get('nome');
  }

  get cpf() {
    return this.form.get('cpf');
  }

  get email() {
    return this.form.get('email');
  }

  get celular() {
    return this.form.get('celular');
  }

  get cnpj() {
    return this.form.get('cnpj');
  }

  get razaoSocial() {
    return this.form.get('razaoSocial');
  }

  get cep() {
    return this.form.get('cep');
  }

  get endereco() {
    return this.form.get('endereco');
  }

  get numero() {
    return this.form.get('numero');
  }

  get complemento() {
    return this.form.get('complemento');
  }

  get bairro() {
    return this.form.get('bairro');
  }

  get cidade() {
    return this.form.get('cidade');
  }

  get estado() {
    return this.form.get('estado');
  }

  onlynumber(evt: any) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
    var regex = /^[0-9]+$/;
    if (!regex.test(key)) {
      theEvent.returnValue = false;
      if (theEvent.preventDefault) theEvent.preventDefault();
    }
  }

  onSubmit() {
    if (this.form.status == 'VALID') {
      console.log(this.form);
      alert('Dados enviados com sucesso');
      this.submitted = false;
      this.form.reset();
    }
    else {
      console.log(this.form);
      this.submitted = true;
    }
  }

}
