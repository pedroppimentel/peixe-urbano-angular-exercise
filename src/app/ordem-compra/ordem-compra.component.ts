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

  constructor() { }

  ngOnInit(): void {
  }

  atualizaEndereco(endereco: string): void {
    this.endereco = endereco;
    console.log(this.endereco);
  }

  atualizaNumero(numero: string): void {
    this.numero = numero;
    console.log(this.numero);
  }

  atualizaComplemento(complemento: string): void {
    this.complemento = complemento;
    console.log(this.complemento);
  }

  atualizaFormaPagamento(formaPagamento: string): void {
    this.formaPagamento = formaPagamento;
    console.log(this.formaPagamento);
  }

}
