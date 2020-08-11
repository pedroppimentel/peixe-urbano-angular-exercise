import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css']
})
export class OrdemCompraComponent implements OnInit {

  endereco: string = '';
  numero: string = '';
  complemento: string = '';
  formaPagamento: string = '';

  enderecoValido = false;
  endValFlag = true;

  numeroValido = false;
  numValFlag = true;

  complementoValido = false;

  formaPagamentoValido = false;
  formaPagValFlag = true;


  constructor() { }

  ngOnInit(): void {
  }

  atualizaEndereco(endereco: string): void {
    this.endereco = endereco;
    this.endValFlag = false;

    if ( this.endereco.length > 3 ) {
      this.enderecoValido = true;
    } else {
      this.enderecoValido = false;
    }
  }

  atualizaNumero(numero: string): void {
    this.numero = numero;
    this.numValFlag = false;

    if ( this.numero.length > 0 ) {
      this.numeroValido = true;
    } else {
      this.numeroValido = false;
    }
  }

  atualizaComplemento(complemento: string): void {
    this.complemento = complemento;

    if ( this.complemento.length > 0 ) {
      this.complementoValido = true;
    } else {
      this.complementoValido = false;
    }
  }

  atualizaFormaPagamento(formaPagamento: string): void {
    this.formaPagamento = formaPagamento;
    this.formaPagValFlag = false;

    if ( this.formaPagamento === 'no-data'  ) {
      this.formaPagamentoValido = false;
    } else {
      this.formaPagamentoValido = true;
    }
  }

}
