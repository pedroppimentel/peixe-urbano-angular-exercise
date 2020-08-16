import { Component, OnInit } from '@angular/core';

import { OrdemCompraService } from '../ordem-compra.service';
import { Pedido } from './../shared/pedido.model';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [OrdemCompraService]
})
export class OrdemCompraComponent implements OnInit {

  public pedido: Pedido = new Pedido('', '', '', '');

  idPedidoCompra: number;

  endereco: string = '';
  numero: string = '';
  complemento: string = '';
  formaPagamento: string = '';
  formState: string = 'disabled'

  enderecoValido = false;
  endValFlag = true;

  numeroValido = false;
  numValFlag = true;

  complementoValido = false;

  formaPagamentoValido = false;
  formaPagValFlag = true;


  constructor(private ordemCompraService: OrdemCompraService) { }

  ngOnInit(): void {
  }

  atualizaEndereco(endereco: string): void {
    this.endereco = endereco;
    this.endValFlag = false;

    if (this.endereco.length > 3) {
      this.enderecoValido = true;
    } else {
      this.enderecoValido = false;
    }

    this.habilitaForm();
  }

  atualizaNumero(numero: string): void {
    this.numero = numero;
    this.numValFlag = false;

    if (this.numero.length > 0) {
      this.numeroValido = true;
    } else {
      this.numeroValido = false;
    }

    this.habilitaForm();
  }

  atualizaComplemento(complemento: string): void {
    this.complemento = complemento;

    if (this.complemento.length > 0) {
      this.complementoValido = true;
    } else {
      this.complementoValido = false;
    }

    this.habilitaForm();
  }

  atualizaFormaPagamento(formaPagamento: string): void {
    this.formaPagamento = formaPagamento;
    this.formaPagValFlag = false;

    if (this.formaPagamento === 'no-data') {
      this.formaPagamentoValido = false;
    } else {
      this.formaPagamentoValido = true;
    }

    this.habilitaForm();
  }

  habilitaForm(): void {
    if (
      this.enderecoValido &&
      this.numeroValido &&
      this.formaPagamentoValido) {
      this.formState = '';
    } else {
      this.formState = 'disabled';
    }
  }

  confirmarCompra(): void {
    this.pedido.endereco = this.endereco;
    this.pedido.complemento = this.complemento;
    this.pedido.numero = this.numero;
    this.formaPagamento = this.formaPagamento;
    this.ordemCompraService.efetivarCompra(this.pedido)
      .subscribe((resp) => {
        console.log(resp.id);
        this.idPedidoCompra = resp.id;
      });
  }

}
