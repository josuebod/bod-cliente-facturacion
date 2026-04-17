/** Factura de cliente expuesta por el API de facturación (campos mínimos usados en UI). */
export interface ClienteFactura {
  uuid: string;
  uuidCuentaCorriente: string;
  estadoFactura: string;
}

export interface Movimiento {
  uuid: string;
  status: number;
  dateCreated: number;
  uuidCuentaCorriente: string;
  referencia: string;
  monto: number;
}
