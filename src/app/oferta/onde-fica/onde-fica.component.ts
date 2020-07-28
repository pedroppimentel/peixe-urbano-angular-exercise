import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { OfertasService } from './../../ofertas.service';

@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css'],
  providers: [OfertasService]
})
export class OndeFicaComponent implements OnInit {

  ondeFica = '';

  constructor(
    private route: ActivatedRoute,
    private ofertasService: OfertasService) { }

    ngOnInit(): void {
    this.ofertasService.getOndeFicaOfertaById(this.route.parent.snapshot.params['id'])
    .then((descricao: string) => {
      this.ondeFica = descricao;
    });
  }

}
