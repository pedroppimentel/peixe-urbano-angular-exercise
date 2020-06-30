import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { URL_API } from './app.api';
import { Oferta } from './shared/oferta.model';

@Injectable()
export class OfertasService {

    constructor(private http: HttpClient) { }

    getOfertas(): Promise<Oferta[]> {
        return this.http.get<Oferta[]>(`${URL_API}?destaque=true`).toPromise();
    }

    getOfertasPorCategoria(categoria: string): Promise<Oferta[]> {
        return this.http.get<Oferta[]>(`${URL_API}?categoria=${ categoria }`).toPromise();
    }

    getOfertaById(id: number): Promise<Oferta> {
        return this.http.get(`${URL_API}?id=${ id }`)
        .toPromise()
        .then((resposta: any) => {
            return resposta[0];
        })
    }
}