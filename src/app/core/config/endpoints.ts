import { Endpoint } from '@bod/shared';
import { environment } from 'src/environments/environment';

export const ENDPOINTS = {
  COBRANZAS: {
    CREATE_PAGO: new Endpoint('cobranza/pagos/crear', 'POST', undefined, environment.apiBaseUrl),
  },
  FACTURACION: {
    GET_CLIENTE_FACTURAS_PAGINATION: new Endpoint(
      'facturacion/cliente/paginar',
      'POST',
      undefined,
      environment.apiBaseUrl,
    ),
    GET_CLIENTE_FACTURAS_VISTAS_PAGINATION: new Endpoint(
      'facturacion/vistas/paginar',
      'POST',
      undefined,
      environment.apiBaseUrl,
    ),
    GET_CLIENTE_FACTURAS_VISTAS_COLUMNAS: new Endpoint(
      'facturacion/vistas/obtener-campos',
      'GET',
      undefined,
      environment.apiBaseUrl,
    ),
  },
};
