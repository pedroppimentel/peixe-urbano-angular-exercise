import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { URL_API } from './app.api';
import { Oferta } from './shared/oferta.model';

@Injectable()
export class OfertasService {

    constructor(private http: HttpClient) { }

    getOfertas(): Promise<Oferta[]> {
        return this.http.get<Oferta[]>(`${URL_API}/ofertas?destaque=true`).toPromise();
    }

    getOfertasPorCategoria(categoria: string): Promise<Oferta[]> {
        return this.http.get<Oferta[]>(`${URL_API}/ofertas?categoria=${ categoria }`).toPromise();
    }

    getOfertaById(id: number): Promise<Oferta> {
        return this.http.get(`${URL_API}/ofertas?id=${ id }`)
        .toPromise()
        .then((resp: any) => {
            return resp[0];
        });
    }

    getComoUsarOfertaById(id: number): Promise<string> {
        return this.http.get( `${ URL_API }/como-usar?id=${ id }`)
        .toPromise()
        .then((resp: any) => {
            return resp[0].descricao;
        });
    }

    getOndeFicaOfertaById(id: number): Promise<string> {
        return this.http.get( `${ URL_API }/onde-fica?id=${ id }`)
        .toPromise()
        .then((resp: any) => {
            return resp[0].descricao;
        });
    }
}
