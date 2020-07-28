import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [OfertasService]
})
export class TopoComponent implements OnInit {

  offers: Observable<Oferta[]>;

  constructor(private ofertasService: OfertasService) { }

  ngOnInit(): void {
  }

  searchOffers(searchTerm: string): void {
    this.ofertasService.searchOffers(searchTerm)
    .subscribe(
      (resp: Oferta[]) => console.log(resp),
      (erro: any) => console.log('Status error: ', erro.status),
      () => console.log('Events flow complete')
    );
  }

}
