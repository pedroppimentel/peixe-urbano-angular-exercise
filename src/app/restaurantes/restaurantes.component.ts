import { OfertasService } from './../ofertas.service';
import { Component, OnInit } from '@angular/core';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css'],
  providers: [ OfertasService ]
})
export class RestaurantesComponent implements OnInit {

  public ofertas: Oferta[];

  constructor(private ofertasSerivice: OfertasService) { }

  ngOnInit(): void {
    this.ofertasSerivice.getOfertasPorCategoria('restaurante')
    .then((ofertas: Oferta[]) => {
      this.ofertas = ofertas;
    });
  }

}
