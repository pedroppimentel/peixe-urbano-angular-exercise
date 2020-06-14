import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Oferta } from './shared/oferta.model';

@Injectable()
export class OfertasService {

    constructor(private http: HttpClient) { }

    getOfertas(): Promise<Oferta[]> {
        return this.http.get<Oferta[]>('http://localhost:3000/ofertas')
            .toPromise();
    }
}