export interface CreatePagoResponse {
  id: string;
  init_point: string;
}

export interface CreatePagoRequest {
  cuentaCorrienteUuid: string;
  fechaPago: string;
  medioDePagoUuid: string;
  referencia: string;
  facturas: {
    facturaUuid: string;
  }[];
}
