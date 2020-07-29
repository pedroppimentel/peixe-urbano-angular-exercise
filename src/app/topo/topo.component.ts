import { Observable, Subject, of } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';
import { switchMap, debounceTime, distinctUntilChanged, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [OfertasService]
})
export class TopoComponent implements OnInit {

  offers: Observable<Oferta[]>;
  private subjectSearch: Subject<string> = new Subject<string>();

  constructor(private ofertasService: OfertasService) { }

  ngOnInit(): void {
    this.offers = this.subjectSearch
    .pipe(debounceTime(1000), distinctUntilChanged(), switchMap((term: string) => {
      if ( term.trim() === '' ) {
        return of<Oferta[]>([]);
      }
      return this.ofertasService.searchOffers(term);
    }),
    catchError((err: any) => {
      console.log(err);
      return of<Oferta[]>([]);
    }));
  }

  searchOffers(searchTerm: string): void {
    this.subjectSearch.next(searchTerm);
  }

  clearSearch(): void {
    this.subjectSearch.next('');
  }

}
