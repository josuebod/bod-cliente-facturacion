import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import {
  DataSourcePaginator,
  DataTable,
  DataTableBuilder,
  PanelPageHeader,
  PaginatedVista,
  PaginatedVistaColumn,
  TableToolbar,
  PaginationRequest,
  Pagination,
} from '@bod/shared';
import { MenuItem } from 'primeng/api';
import { FacturacionApi, CobranzasApi } from '../../core/api';
import { ClienteFactura } from '../../core/models';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'bod-cliente-facturas',
  imports: [PanelPageHeader, DataTable, TableToolbar, ButtonModule],
  templateUrl: './cliente-facturas.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClienteFacturas implements OnInit {
  private readonly facturacionApi = inject(FacturacionApi);
  private readonly cobranzasApi = inject(CobranzasApi);

  public readonly vistas = signal<PaginatedVista[]>([]);
  public readonly columnas = signal<PaginatedVistaColumn[]>([]);
  public paginator = signal<DataSourcePaginator<ClienteFactura> | undefined>(undefined);

  public readonly pageActions = signal<MenuItem[]>([]);

  ngOnInit(): void {
    this.loadVistas();
  }

  private loadVistas(): void {
    const dataTableBuilder = new DataTableBuilder<ClienteFactura>({
      fetchVistas: () => this.facturacionApi.getAllClienteFacturasVistas(),
      fetchColumnas: (uuid: string) => this.facturacionApi.getClienteFacturasVistasColumnas(uuid),
      fetchData: (request: PaginationRequest) =>
        this.facturacionApi.getClienteFacturasPagination(request),
    });

    dataTableBuilder.build().subscribe({
      next: ({ vistas, columnas, paginator }) => {
        this.vistas.set(vistas);
        this.columnas.set(columnas);
        this.paginator.set(paginator);
      },
    });
  }

  public onVistaChange(uuid: string): void {
    this.facturacionApi.getClienteFacturasVistasColumnas(uuid).subscribe({
      next: (columnas) => {
        this.columnas.set(columnas);
        this.paginator()?.applyVista(uuid);
      },
    });
  }

  public createPago(row: { uuidCuentaCorriente: string; uuid: string }): void {
    console.log(row);
    const MERCADO_PAGO_UUID = '92537d56-77bf-4abd-89ba-17098c45ce68';
    this.cobranzasApi
      .createPago({
        cuentaCorrienteUuid: row.uuidCuentaCorriente,
        fechaPago: new Date().toISOString(),
        medioDePagoUuid: MERCADO_PAGO_UUID,
        referencia: '',
        facturas: [
          {
            facturaUuid: row.uuid,
          },
        ],
      })
      .subscribe({
        next: (response) => {
          // window.open(response.init_point, '_blank');
          if (response.init_point) {
            window.location.href = response.init_point;
          }
        },
      });
  }
}
