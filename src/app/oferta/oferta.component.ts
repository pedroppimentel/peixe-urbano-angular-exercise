import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Oferta } from '../shared/oferta.model';
import { OfertasService } from '../ofertas.service';
import { CarrinhoService } from '../carrinho.service';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [ OfertasService ]
})
export class OfertaComponent implements OnInit, OnDestroy {
  public oferta: Oferta;
  public quantidade: number = 1;

  constructor(
    private route: ActivatedRoute,
    private ofertasService: OfertasService,
    private carrinhoService: CarrinhoService) { }

  ngOnInit(): void {
    this.route.params.subscribe((parameters: Params) => {
      this.ofertasService.getOfertaById(parameters.id)
      .then((oferta: Oferta) => {
        this.oferta = oferta;
      });
    });
  }

  adicionarItemCarrinho(): void {
    this.carrinhoService.incluirItem(this.oferta, this.quantidade)
  }

  adicionar(): void {
    this.quantidade++;
  }

  diminuir(): void {
    if (this.quantidade > 0) {
      this.quantidade--;
    }    
  }

  ngOnDestroy(): void {
  }

}
