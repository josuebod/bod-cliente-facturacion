import { Endpoint } from '@bod/shared';
import { environment } from 'src/environments/environment';

export const ENDPOINTS = {
  CUENTA_CORRIENTE: {
    GET_CLIENTE_CC_MOVIMIENTOS_PAGINATION: new Endpoint(
      'cuenta-corriente/cliente/movimiento/paginar',
      'POST',
      environment.apiBaseUrl,
    ),
  },
  COBRANZAS: {
    CREATE_PAGO: new Endpoint('cobranza/pagos/crear', 'POST', environment.apiBaseUrl),
  },
  FACTURACION: {
    GET_CLIENTE_FACTURAS_PAGINATION: new Endpoint(
      'facturacion/cliente/paginar',
      'POST',
      environment.apiBaseUrl,
    ),
    GET_CLIENTE_FACTURAS_VISTAS_PAGINATION: new Endpoint(
      'facturacion/vistas/paginar',
      'POST',
      environment.apiBaseUrl,
    ),
    GET_CLIENTE_FACTURAS_VISTAS_COLUMNAS: new Endpoint(
      'facturacion/vistas/obtener-campos',
      'GET',
      environment.apiBaseUrl,
    ),
  },
};
