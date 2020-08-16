import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { OrdemCompraService } from '../ordem-compra.service'
import { Pedido } from '../shared/pedido.model'


@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [ OrdemCompraService ]
})
export class OrdemCompraComponent implements OnInit {

  @ViewChild('formulario') formulario: NgForm;

  idPedidoCompra: number;

  constructor(private ordemCompraService: OrdemCompraService) { }

  ngOnInit() {
  }

  confirmarCompra(): void {

    const pedido: Pedido = new Pedido(
      this.formulario.value.endereco,
      this.formulario.value.numero,
      this.formulario.value.complemento,
      this.formulario.value.formaPagamento);

    this.ordemCompraService.efetivarCompra(pedido)
    .subscribe((resp) => this.idPedidoCompra = resp.id)
  }
}
