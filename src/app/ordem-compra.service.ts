import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Pedido } from './shared/pedido.model';
import { URL_API } from './app.api';

@Injectable()
export class OrdemCompraService {

    constructor(private http: HttpClient) { }

    efetivarCompra(pedido: Pedido): Observable<any> {
        const headers = new HttpHeaders()
        .set('Content-type', 'application/json');

        return this.http.post(
            `${URL_API}/pedidos`,
            JSON.stringify(pedido),
            {
                headers: headers
            }
        )
    }
}