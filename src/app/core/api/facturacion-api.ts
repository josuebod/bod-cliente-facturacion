import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Pagination, PaginationRequest, PaginatedVista, PaginatedVistaColumn } from '@bod/shared';
import { ENDPOINTS } from '../config/endpoints';
import { ClienteFactura } from '../models';

@Injectable({
  providedIn: 'root',
})
export class FacturacionApi {
  private readonly http = inject(HttpClient);

  public getClienteFacturasPagination(
    request: PaginationRequest,
  ): Observable<Pagination<ClienteFactura>> {
    const endpoint = ENDPOINTS.FACTURACION.GET_CLIENTE_FACTURAS_PAGINATION;
    return this.http.request<Pagination<ClienteFactura>>(endpoint.method, endpoint.toString(), {
      body: request,
    });
  }

  public getAllClienteFacturasVistas(): Observable<PaginatedVista[]> {
    const endpoint = ENDPOINTS.FACTURACION.GET_CLIENTE_FACTURAS_VISTAS_PAGINATION;

    return this.http
      .request<Pagination<PaginatedVista>>(endpoint.method, endpoint.toString(), {
        body: {
          page: 1,
          size: 9999,
        },
      })
      .pipe(map((response) => response.content));
  }

  public getClienteFacturasVistasColumnas(uuid: string): Observable<PaginatedVistaColumn[]> {
    const endpoint = ENDPOINTS.FACTURACION.GET_CLIENTE_FACTURAS_VISTAS_COLUMNAS;

    // backend: /.../obtener-campos/{uuid}
    const url = `${endpoint.toString()}/${uuid}`;

    return this.http.request<PaginatedVistaColumn[]>(endpoint.method, url);
  }
}
