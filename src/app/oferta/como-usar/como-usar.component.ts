import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { OfertasService } from './../../ofertas.service';

@Component({
  selector: 'app-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.css'],
  providers: [OfertasService]
})
export class ComoUsarComponent implements OnInit {

  comoUsar = '';

  constructor(
    private route: ActivatedRoute,
    private ofertasService: OfertasService) { }

  ngOnInit(): void {
    this.route.parent.params.subscribe((parameters: Params) => {
    this.ofertasService.getComoUsarOfertaById(parameters.id)
      .then((descricao: string) => {
        this.comoUsar = descricao;
      });
    });
  }
}
