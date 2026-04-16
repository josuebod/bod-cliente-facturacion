import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ENDPOINTS } from '../config/endpoints';
import { CreatePagoRequest, CreatePagoResponse } from '../models/cobranza';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CobranzasApi {
  private readonly http = inject(HttpClient);

  public createPago(request: CreatePagoRequest): Observable<CreatePagoResponse> {
    const endpoint = ENDPOINTS.COBRANZAS.CREATE_PAGO;
    return this.http.request<CreatePagoResponse>(endpoint.method, endpoint.toString(), {
      body: request,
    });
  }
}
