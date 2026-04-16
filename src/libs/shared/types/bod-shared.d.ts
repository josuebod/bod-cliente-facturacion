import * as _angular_core from '@angular/core';
import { PipeTransform, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';
import * as _angular_forms from '@angular/forms';
import { AbstractControl, FormGroup } from '@angular/forms';
import { Subscription, Subject, Observable } from 'rxjs';
import { MenuItem, FilterMetadata, Confirmation, ToastMessageOptions } from 'primeng/api';
import { TableLazyLoadEvent, Table } from 'primeng/table';

declare class LocalizedDatePipe implements PipeTransform {
    private readonly translateService;
    private readonly changeDetectorRef;
    private readonly destroyRef;
    constructor();
    transform(value: Date | string | number, format?: string): string;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<LocalizedDatePipe, never>;
    static ɵpipe: _angular_core.ɵɵPipeDeclaration<LocalizedDatePipe, "localizedDate", true>;
}

declare class LocalizedKeysPipe implements PipeTransform {
    private readonly translateService;
    private readonly changeDetectorRef;
    private readonly destroyRef;
    constructor();
    /**
     * Localizes only the given keys when their value is a string (treated as translation key).
     * When `deep` is true, recurses into nested objects and arrays and applies the same keys.
     *
     * @param value - A single object, an array of objects, or null/undefined
     * @param keys - Keys to translate (e.g. ['label', 'title']). Only these properties are translated, and only if their value is a string.
     * @param deep - If true, recurse into nested objects and arrays
     * @returns The same structure with translated values for the given keys when value is string
     */
    transform<T>(value: T, keys: string[], deep?: boolean): T;
    private localize;
    private isPlainObject;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<LocalizedKeysPipe, never>;
    static ɵpipe: _angular_core.ɵɵPipeDeclaration<LocalizedKeysPipe, "localizedKeys", true>;
}

declare class EmptyMessage {
    private readonly sanitizer;
    readonly message: _angular_core.InputSignal<string>;
    readonly image: _angular_core.InputSignal<"error" | "empty">;
    readonly severity: _angular_core.InputSignal<"error" | "success" | "info" | "warn" | "secondary" | "contrast">;
    /** URL del icono SVG sanitizada para que Angular permita usarla en [src] de <img> */
    iconSvg: _angular_core.Signal<SafeUrl>;
    retryFunction: _angular_core.InputSignal<(() => void) | undefined>;
    goBackFunction: _angular_core.InputSignal<(() => void) | undefined>;
    onGoBack(): void;
    onRetry(): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<EmptyMessage, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<EmptyMessage, "bod-empty-message", never, { "message": { "alias": "message"; "required": false; "isSignal": true; }; "image": { "alias": "image"; "required": false; "isSignal": true; }; "severity": { "alias": "severity"; "required": false; "isSignal": true; }; "retryFunction": { "alias": "retryFunction"; "required": false; "isSignal": true; }; "goBackFunction": { "alias": "goBackFunction"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}

declare class FormDialog {
    visible: _angular_core.InputSignal<boolean>;
    visibleChange: _angular_core.OutputEmitterRef<boolean>;
    hide: _angular_core.OutputEmitterRef<void>;
    save: _angular_core.OutputEmitterRef<void>;
    header: _angular_core.InputSignal<string | undefined>;
    saving: _angular_core.InputSignal<boolean>;
    show: _angular_core.OutputEmitterRef<void>;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<FormDialog, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<FormDialog, "bod-form-dialog", never, { "visible": { "alias": "visible"; "required": false; "isSignal": true; }; "header": { "alias": "header"; "required": false; "isSignal": true; }; "saving": { "alias": "saving"; "required": false; "isSignal": true; }; }, { "visibleChange": "visibleChange"; "hide": "hide"; "save": "save"; "show": "show"; }, never, ["*"], true, never>;
}

declare class FormDialogWrapper {
    readonly save: _angular_core.OutputEmitterRef<void>;
    readonly cancel: _angular_core.OutputEmitterRef<void>;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<FormDialogWrapper, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<FormDialogWrapper, "bod-form-dialog-wrapper", never, {}, { "save": "save"; "cancel": "cancel"; }, never, ["*"], true, never>;
}

declare class FormFieldLabel {
    for: _angular_core.InputSignal<string | undefined>;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<FormFieldLabel, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<FormFieldLabel, "bod-form-field-label", never, { "for": { "alias": "for"; "required": false; "isSignal": true; }; }, {}, never, ["*"], true, never>;
}

declare class FormFieldControl {
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<FormFieldControl, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<FormFieldControl, "bod-form-field-control", never, {}, {}, never, ["*"], true, never>;
}

declare class FormField implements OnDestroy {
    private ngControlDirective;
    innerControl: _angular_core.Signal<_angular_forms.AbstractControl<any, any, any> | null | undefined>;
    shouldShowValidationErrors: _angular_core.WritableSignal<boolean>;
    controlIsRequired: _angular_core.Signal<boolean | undefined>;
    subscription: Subscription;
    customValidationMessages: _angular_core.InputSignal<Record<string, string> | undefined>;
    formFieldLabel: _angular_core.Signal<FormFieldLabel | undefined>;
    formFieldControl: _angular_core.Signal<FormFieldControl | undefined>;
    inline: _angular_core.InputSignal<boolean>;
    showRequiredIndicator: _angular_core.InputSignal<boolean>;
    showValidationErrors: _angular_core.InputSignal<boolean>;
    /**
     * When true (default), reserves space below the control for messages/hint (min-height).
     * When false, height is dynamic and collapses when there is no content.
     */
    reserveMessagesSpace: _angular_core.InputSignal<boolean>;
    constructor();
    ngOnDestroy(): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<FormField, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<FormField, "bod-form-field", never, { "customValidationMessages": { "alias": "customValidationMessages"; "required": false; "isSignal": true; }; "inline": { "alias": "inline"; "required": false; "isSignal": true; }; "showRequiredIndicator": { "alias": "showRequiredIndicator"; "required": false; "isSignal": true; }; "showValidationErrors": { "alias": "showValidationErrors"; "required": false; "isSignal": true; }; "reserveMessagesSpace": { "alias": "reserveMessagesSpace"; "required": false; "isSignal": true; }; }, {}, ["ngControlDirective", "formFieldLabel", "formFieldControl"], ["bod-form-field-label", "bod-form-field-control", "bod-form-field-hint"], true, never>;
}

declare class FormFieldHint {
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<FormFieldHint, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<FormFieldHint, "bod-form-field-hint", never, {}, {}, never, ["*"], true, never>;
}

declare class FormFieldValidationErrors implements OnDestroy, OnInit {
    private readonly translateService;
    private readonly subscriptions;
    control: _angular_core.InputSignal<AbstractControl<any, any, any>>;
    customMessages: _angular_core.InputSignal<Record<string, string> | undefined>;
    message: _angular_core.WritableSignal<string>;
    shouldShow: _angular_core.Signal<boolean>;
    ngOnInit(): void;
    ngOnDestroy(): void;
    private clearMessage;
    private subscribeToControlStatusChanges;
    private updateMessageFromControl;
    private getErrorMessage;
    private getTranslationParams;
    private getTranslationKey;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<FormFieldValidationErrors, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<FormFieldValidationErrors, "bod-form-field-validation-errors", never, { "control": { "alias": "control"; "required": true; "isSignal": true; }; "customMessages": { "alias": "customMessages"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}

declare enum DisplayMode {
    DARK_MODE = "dark-mode",
    LIGHT_MODE = "light-mode"
}

declare enum LoadState {
    IDLE = "idle",
    LOADING = "loading",
    EMPTY = "empty",
    ERROR = "error",
    SUCCESS = "success"
}

declare class LoadStateHandler {
    readonly loadState: _angular_core.InputSignal<LoadState>;
    readonly retryFn: _angular_core.InputSignal<(() => void) | undefined>;
    readonly backFn: _angular_core.InputSignal<(() => void) | undefined>;
    readonly emptyText: _angular_core.InputSignal<string>;
    readonly errorText: _angular_core.InputSignal<string>;
    readonly loadingText: _angular_core.InputSignal<string>;
    readonly goBackText: _angular_core.InputSignal<string>;
    readonly retryText: _angular_core.InputSignal<string>;
    protected readonly isLoading: _angular_core.Signal<boolean>;
    protected readonly isSuccess: _angular_core.Signal<boolean>;
    protected readonly isError: _angular_core.Signal<boolean>;
    protected readonly isEmpty: _angular_core.Signal<boolean>;
    readonly display: _angular_core.InputSignal<"simple" | "full">;
    readonly onRetry: () => void;
    readonly onBack: () => void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<LoadStateHandler, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<LoadStateHandler, "bod-load-state-handler", never, { "loadState": { "alias": "loadState"; "required": true; "isSignal": true; }; "retryFn": { "alias": "retryFn"; "required": false; "isSignal": true; }; "backFn": { "alias": "backFn"; "required": false; "isSignal": true; }; "emptyText": { "alias": "emptyText"; "required": false; "isSignal": true; }; "errorText": { "alias": "errorText"; "required": false; "isSignal": true; }; "loadingText": { "alias": "loadingText"; "required": false; "isSignal": true; }; "goBackText": { "alias": "goBackText"; "required": false; "isSignal": true; }; "retryText": { "alias": "retryText"; "required": false; "isSignal": true; }; "display": { "alias": "display"; "required": false; "isSignal": true; }; }, {}, never, ["*"], true, never>;
}

declare class LoadingIndicator {
    readonly size: _angular_core.InputSignal<number>;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<LoadingIndicator, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<LoadingIndicator, "bod-loading-indicator", never, { "size": { "alias": "size"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}

declare class PanelPageHeader {
    readonly title: _angular_core.InputSignal<string>;
    readonly description: _angular_core.InputSignal<string>;
    readonly actions: _angular_core.InputSignal<MenuItem[]>;
    readonly backRouterLink: _angular_core.InputSignal<string>;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<PanelPageHeader, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<PanelPageHeader, "bod-panel-page-header", never, { "title": { "alias": "title"; "required": false; "isSignal": true; }; "description": { "alias": "description"; "required": false; "isSignal": true; }; "actions": { "alias": "actions"; "required": false; "isSignal": true; }; "backRouterLink": { "alias": "backRouterLink"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}

interface PaginatedVistaColumn {
    type: 'text' | 'number' | 'boolean' | 'date' | 'list' | 'currency';
    header: string;
    key: string;
    sortable?: boolean;
    filterable?: boolean;
    filtersConfig?: {
        filterKey: string;
        type?: 'text' | 'number' | 'boolean' | 'date';
        matchModeOptions: string[];
    };
}
interface PaginatedVista {
    uuid: string;
    status: number;
    dateCreated: Date | null;
    nombre: string;
}

interface Column<TKey extends string = string> {
    key: TKey;
    field?: string;
    header: string;
    template?: TemplateRef<unknown>;
}
declare class TableToolbar implements OnInit {
    actionsMenuItems: _angular_core.InputSignal<MenuItem[]>;
    displayedColumns: _angular_core.InputSignal<string[]>;
    vistas: _angular_core.InputSignal<PaginatedVista[]>;
    displayedColumnsChange: _angular_core.OutputEmitterRef<string[]>;
    title: _angular_core.InputSignal<string>;
    columns: _angular_core.InputSignal<Column<string>[]>;
    searchChange: _angular_core.OutputEmitterRef<string>;
    selectedVista: _angular_core.InputSignal<string | null>;
    selectedVistaChange: _angular_core.OutputEmitterRef<string>;
    private destroyRef;
    protected searchInput: Subject<string>;
    private _displayedColumnsSet;
    ngOnInit(): void;
    columnIsChecked(columnKey: string): boolean;
    onColumnChecked(columnKey: string): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<TableToolbar, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<TableToolbar, "bod-table-toolbar", never, { "actionsMenuItems": { "alias": "actionsMenuItems"; "required": false; "isSignal": true; }; "displayedColumns": { "alias": "displayedColumns"; "required": false; "isSignal": true; }; "vistas": { "alias": "vistas"; "required": false; "isSignal": true; }; "title": { "alias": "title"; "required": false; "isSignal": true; }; "columns": { "alias": "columns"; "required": false; "isSignal": true; }; "selectedVista": { "alias": "selectedVista"; "required": false; "isSignal": true; }; }, { "displayedColumnsChange": "displayedColumnsChange"; "searchChange": "searchChange"; "selectedVistaChange": "selectedVistaChange"; }, never, never, true, never>;
}

declare class ThemeToggleButton {
    toggleTheme: _angular_core.OutputEmitterRef<void>;
    isDark: _angular_core.InputSignal<boolean>;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<ThemeToggleButton, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<ThemeToggleButton, "bod-theme-toggle-button", never, { "isDark": { "alias": "isDark"; "required": false; "isSignal": true; }; }, { "toggleTheme": "toggleTheme"; }, never, never, true, never>;
}

interface AuthUser {
    username: string;
    userId: number;
    companyId: number;
    roles: string[];
    permisos: string[];
}

declare class Endpoint {
    readonly path: string;
    readonly method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'OPTIONS' | 'HEAD';
    readonly baseUrl: string;
    readonly version?: "v1" | "v2" | "v3" | undefined;
    constructor(path: string, method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'OPTIONS' | 'HEAD', baseUrl: string, version?: "v1" | "v2" | "v3" | undefined);
    toString(): string;
}

interface LegacyPagination<TData> {
    content: TData[];
    totalElements: number;
    totalPages: number;
    number: number;
    size: number;
}
interface LegacyPaginationRequestOrder {
    tabla: string;
    columna: string;
    direccion: 'asc' | 'desc';
}
interface LegacyPaginationRequestFilter {
    tabla: string;
    columna: string;
    operacion: string;
    valor: string | boolean | number;
}
interface LegacyPaginationRequest {
    page: number;
    size: number;
    parametros?: Record<string, any>;
    relaciones?: string[];
    ordenes?: LegacyPaginationRequestOrder[];
    filtros?: LegacyPaginationRequestFilter[][];
}
interface LegacyPaginatorOptions<T> {
    page?: number;
    pageSize?: number;
    infiniteScroll?: boolean;
    defaultFilters?: LegacyPaginationRequestFilter[];
    /** Tabla usada al construir ordenes cuando se usa sortBy/sortDirection */
    sortTable?: string;
    relaciones?: string[];
    fetchData(request: LegacyPaginationRequest): Observable<LegacyPagination<T>>;
}

type PaginationFilter = {
    [key: string]: FilterMetadata | FilterMetadata[] | undefined;
};
interface MultiSortMeta {
    field: string;
    order: number;
}
declare enum PaginationFilterOperation {
    LIKE = "like",
    EQUAL = "=",
    LESS_THAN = "<",
    GREATER_THAN = ">",
    LESS_THAN_OR_EQUAL = "<=",
    GREATER_THAN_OR_EQUAL = ">="
}
interface Pagination<TData> {
    content: TData[];
    totalElements: number;
    totalPages: number;
    number: number;
    size: number;
}
interface PaginationRequestOrder {
    tabla: string;
    columna: string;
    direccion: 'asc' | 'desc';
}
interface PaginationRequest {
    first: number;
    rows: number;
    parametros?: Record<string, any>;
    relaciones?: string[];
    multiSortMeta?: MultiSortMeta[];
    filters?: PaginationFilter;
    uuidVista?: string;
}
interface PaginatorOptions<T> {
    uuidVista?: string;
    page?: number;
    pageSize?: number;
    infiniteScroll?: boolean;
    defaultFilters?: PaginationFilter;
    /** Tabla usada al construir ordenes cuando se usa sortBy/sortDirection */
    sortTable?: string;
    relaciones?: string[];
    fetchData(request: PaginationRequest): Observable<Pagination<T>>;
}

declare class DataSourcePaginator<T> {
    private _items;
    private _totalCount;
    private _totalPages;
    private _currentPage;
    private _pageSize;
    private _hasNextPage;
    private _hasPreviousPage;
    private _multiSortMeta;
    private _filters;
    private _itemsSubject;
    private _loadState;
    items: _angular_core.Signal<T[]>;
    loadState: _angular_core.Signal<LoadState>;
    loading: _angular_core.Signal<boolean>;
    empty: _angular_core.Signal<boolean>;
    error: _angular_core.Signal<boolean>;
    success: _angular_core.Signal<boolean>;
    totalCount: _angular_core.Signal<number>;
    totalPages: _angular_core.Signal<number>;
    currentPage: _angular_core.Signal<number>;
    pageSize: _angular_core.Signal<number>;
    hasNextPage: _angular_core.Signal<boolean>;
    hasPreviousPage: _angular_core.Signal<boolean>;
    filters: _angular_core.Signal<PaginationFilter>;
    multiSortMeta: _angular_core.Signal<MultiSortMeta[]>;
    pageIndex: _angular_core.Signal<number>;
    items$: Observable<T[]>;
    uuidVista: _angular_core.WritableSignal<string | null>;
    private infiniteScroll;
    private defaultFilters;
    private sortTable;
    private relaciones;
    protected fetchData: (request: PaginationRequest) => Observable<Pagination<T>>;
    filtersApplied: _angular_core.Signal<boolean>;
    constructor(options: PaginatorOptions<T>);
    clearFilters(): void;
    applyGlobalSearch(value: string, columns: string[]): void;
    applyVista(uuid: string): void;
    applyFilters(key: string, filters: PaginationFilter | PaginationFilter[]): void;
    private clearItems;
    /**
     * Construye un PaginationRequest según el modelo del API (first, rows, parametros, ordenes, filtros).
     * first = índice del primer registro de la página; rows = tamaño de página (alineado con PrimeNG TableLazyLoadEvent).
     */
    buildRequest(): PaginationRequest;
    refresh(): void;
    /**
     * Get current items value from BehaviorSubject
     */
    getCurrentItems(): T[];
    loadNextPage(): void;
    loadPreviousPage(): void;
    handleTableLazyLoadEvent(event: TableLazyLoadEvent): void;
    /**
     * Load data with current pagination settings
     */
    loadData(page?: number, pageSize?: number): void;
    /**
     * Procesa la respuesta Pagination del API (contant, totalElements, totalPages, number, size).
     */
    private handleSuccess;
    private updateItems;
    /**
     * Handle API error
     */
    private handleError;
}

declare class DataTableBuilder<T extends object> {
    private readonly fetchVistas;
    private readonly fetchColumnas;
    private readonly fetchData;
    constructor(params: {
        fetchVistas: () => Observable<PaginatedVista[]>;
        fetchColumnas: (uuid: string) => Observable<PaginatedVistaColumn[]>;
        fetchData: (request: PaginationRequest) => Observable<Pagination<T>>;
    });
    build(): Observable<{
        vistas: PaginatedVista[];
        columnas: PaginatedVistaColumn[];
        paginator: DataSourcePaginator<T>;
    }>;
}

/**
 * Opciones para obtener solo los valores modificados de un formulario.
 */
interface GetDirtyFormValueOptions {
    /**
     * Claves a excluir del resultado (p. ej. campos que solo aplican en creación).
     */
    excludeKeys?: string[];
}
/**
 * Devuelve un objeto solo con los valores de los controles que están "dirty"
 * (modificados por el usuario). Pensado para armar payloads de actualización
 * sin enviar campos que no cambiaron.
 *
 * - En FormControl: se incluye el valor si el control está dirty.
 * - En FormGroup: se recorre recursivamente y se incluyen solo controles dirty.
 * - En FormArray: si el array está dirty se incluye su valor completo.
 *
 * Reutilizable en cualquier formulario que use Reactive Forms.
 *
 * @param form FormGroup del que extraer valores
 * @param options Opciones (excluir claves, etc.)
 * @returns Objeto con solo las propiedades cuyos controles están dirty
 */
declare function getDirtyFormValue(form: FormGroup, options?: GetDirtyFormValueOptions): Record<string, unknown>;

declare function shouldShowValidationErrors(control: AbstractControl): boolean;

interface LegacyPaginationFilter extends LegacyPaginationRequestFilter {
    isGlobal?: boolean;
}
declare class LegacyDataSourcePaginator<T> {
    private _items;
    private _loading;
    private _error;
    private _totalCount;
    private _totalPages;
    private _currentPage;
    private _pageSize;
    private _hasNextPage;
    private _hasPreviousPage;
    private _sortBy;
    private _sortDirection;
    private _filters;
    private _itemsSubject;
    items: _angular_core.Signal<T[]>;
    loading: _angular_core.Signal<boolean>;
    error: _angular_core.Signal<string | null>;
    totalCount: _angular_core.Signal<number>;
    totalPages: _angular_core.Signal<number>;
    currentPage: _angular_core.Signal<number>;
    pageSize: _angular_core.Signal<number>;
    hasNextPage: _angular_core.Signal<boolean>;
    hasPreviousPage: _angular_core.Signal<boolean>;
    sortBy: _angular_core.Signal<string>;
    sortDirection: _angular_core.Signal<"asc" | "desc">;
    filters: _angular_core.Signal<LegacyPaginationFilter[][]>;
    pageIndex: _angular_core.Signal<number>;
    items$: Observable<LegacyPagination<T>[]>;
    private infiniteScroll;
    private defaultFilters;
    private sortTable;
    private relaciones;
    protected fetchData: (request: LegacyPaginationRequest) => Observable<LegacyPagination<T>>;
    filtersApplied: _angular_core.Signal<boolean>;
    constructor(options: LegacyPaginatorOptions<T>);
    clearFilters(): void;
    applyGlobalSearch(value: string, columns: string[]): void;
    applyFilters(filters: LegacyPaginationFilter[], concat?: boolean): void;
    private clearItems;
    /**
     * Construye un PaginationRequest según el modelo del API (page 0-based, size, parametros, ordenes, filtros).
     */
    private buildRequest;
    refresh(): void;
    /**
     * Get current items value from BehaviorSubject
     */
    getCurrentItems(): T[];
    loadNextPage(): void;
    loadPreviousPage(): void;
    handleTableLazyLoadEvent(event: TableLazyLoadEvent): void;
    /**
     * Load data with current pagination settings
     */
    loadData(page?: number, pageSize?: number): void;
    /**
     * Procesa la respuesta Pagination del API (contant, totalElements, totalPages, number, size).
     */
    private handleSuccess;
    private updateItems;
    /**
     * Handle API error
     */
    private handleError;
}

/**
 * Contrato mínimo que debe cumplir la fuente de datos de la tabla
 * (p. ej. DataSourcePaginator de @bod/shared).
 */
declare class DataTable<T extends object> {
    /** Fuente de datos (paginator) con items, loading, paginación y lazy load */
    readonly dataSource: _angular_core.InputSignal<DataSourcePaginator<T>>;
    /** Definición de columnas (header + entityName para acceder al valor en la fila) */
    readonly columns: _angular_core.InputSignal<PaginatedVistaColumn[]>;
    /** Si se muestra la columna de acciones (primera columna). Por defecto true */
    readonly showActionsColumn: _angular_core.InputSignal<boolean>;
    readonly rowActions: _angular_core.InputSignal<MenuItem[]>;
    readonly rowActionClicked: _angular_core.OutputEmitterRef<T | null>;
    readonly visibleRowActions: _angular_core.Signal<MenuItem[]>;
    readonly visibleRowActionsLength: _angular_core.Signal<number>;
    readonly rowActionsTemplate: _angular_core.Signal<TemplateRef<unknown> | undefined>;
    readonly captionTemplate: _angular_core.Signal<TemplateRef<unknown> | undefined>;
    /** Altura del scroll del body (p. ej. '500px'). Por defecto '500px' */
    readonly scrollHeight: _angular_core.InputSignal<string>;
    /** Opciones de filas por página */
    readonly rowsPerPageOptions: _angular_core.InputSignal<number[]>;
    readonly dt: _angular_core.Signal<Table<any> | undefined>;
    onLazyLoad(event: TableLazyLoadEvent): void;
    onRowActionClick(menuItem: MenuItem, event: MouseEvent, row: T): void;
    filterGlobal(value: string, matchMode: string): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<DataTable<any>, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<DataTable<any>, "bod-data-table", never, { "dataSource": { "alias": "dataSource"; "required": true; "isSignal": true; }; "columns": { "alias": "columns"; "required": false; "isSignal": true; }; "showActionsColumn": { "alias": "showActionsColumn"; "required": false; "isSignal": true; }; "rowActions": { "alias": "rowActions"; "required": false; "isSignal": true; }; "scrollHeight": { "alias": "scrollHeight"; "required": false; "isSignal": true; }; "rowsPerPageOptions": { "alias": "rowsPerPageOptions"; "required": false; "isSignal": true; }; }, { "rowActionClicked": "rowActionClicked"; }, ["rowActionsTemplate", "captionTemplate"], never, true, never>;
}

declare class AuthState {
    private readonly _authUser;
    authUser: _angular_core.Signal<AuthUser | null>;
    isAuthenticated: _angular_core.Signal<boolean>;
    setAuthUser(authUser: AuthUser): void;
    resetState(): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<AuthState, never>;
    static ɵprov: _angular_core.ɵɵInjectableDeclaration<AuthState>;
}

declare class ConfirmService {
    private readonly confirmationService;
    confirm(options: Pick<Confirmation, 'accept' | 'reject' | 'message'>): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<ConfirmService, never>;
    static ɵprov: _angular_core.ɵɵInjectableDeclaration<ConfirmService>;
}

declare class MenuItemsLocalizer {
    private readonly translateService;
    /**
     * Returns an observable of the localized menu.
     * Emits immediately with translated labels and then again whenever the language changes.
     * @param menu - The menu to localize.
     * @returns An observable of the localized menu.
     */
    getLocalizedMenuItemsObservable(menu: MenuItem[]): Observable<MenuItem[]>;
    /**
     * Returns the localized menu.
     * @param menu - The menu to localize.
     * @returns The localized menu.
     */
    getLocalizedMenuItems(menu: MenuItem[]): MenuItem[];
    private translateLabels;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<MenuItemsLocalizer, never>;
    static ɵprov: _angular_core.ɵɵInjectableDeclaration<MenuItemsLocalizer>;
}

declare class ThemeService {
    private currentDisplayMode;
    private document;
    isDark: _angular_core.Signal<boolean>;
    /**
     * Load theme from storage or use default
     */
    loadDisplayMode(): void;
    /**
     * Check if theme name is valid
     */
    private isValidDisplayMode;
    /**
     * Apply theme by switching the stylesheet bundle and CSS classes
     */
    applyDisplayMode(displayMode: DisplayMode): void;
    /**
     * Toggle between light and dark themes
     */
    toggleDisplayMode(): void;
    /**
     * Set light theme
     */
    applyLightDisplayMode(): void;
    /**
     * Set dark theme
     */
    applyDarkDisplayMode(): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<ThemeService, never>;
    static ɵprov: _angular_core.ɵɵInjectableDeclaration<ThemeService>;
}

type ToastOptions = Omit<ToastMessageOptions, 'severity'>;
declare class ToastService {
    private messageService;
    private readonly defaultConfig;
    show(options: ToastMessageOptions): void;
    success(message: string, options?: ToastOptions): void;
    error(message: string, options?: ToastOptions): void;
    info(message: string, options?: ToastOptions): void;
    warning(message: string, options?: ToastOptions): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<ToastService, never>;
    static ɵprov: _angular_core.ɵɵInjectableDeclaration<ToastService>;
}

/**
 * Tailwind breakpoints (px):
 * sm: 640, md: 768, lg: 1024, xl: 1280, 2xl: 1536
 */
declare const VIEWPORT_BREAKPOINTS: {
    readonly sm: 640;
    readonly md: 768;
    readonly lg: 1024;
    readonly xl: 1280;
    readonly '2xl': 1536;
};
type ViewportBreakpoint = keyof typeof VIEWPORT_BREAKPOINTS;
declare class ViewportService {
    private readonly platformId;
    private readonly _width;
    private readonly _height;
    /** Current viewport width in pixels */
    readonly width: _angular_core.Signal<number>;
    /** Current viewport height in pixels */
    readonly height: _angular_core.Signal<number>;
    /** Whether viewport is below lg breakpoint (1024px) - use drawer instead of fixed sidebar */
    readonly isMobileView: _angular_core.WritableSignal<boolean>;
    constructor();
    /** Check if viewport is below a specific breakpoint */
    isBelow(breakpoint: ViewportBreakpoint): boolean;
    /** Check if viewport is at or above a specific breakpoint */
    isAtOrAbove(breakpoint: ViewportBreakpoint): boolean;
    private readonly updateViewport;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<ViewportService, never>;
    static ɵprov: _angular_core.ɵɵInjectableDeclaration<ViewportService>;
}

declare const CONFIRM_DIALOG_KEY = "confirmDialog";
declare const CONFIRM_CHANGES_DIALOG_KEY = "confirmChangesDialog";

declare const DISPLAY_MODE_KEY = "display-mode";
declare const LANGUAGE_KEY = "language";
declare const ACCESS_TOKEN_KEY = "access-token";

declare const GLOBAL_TOAST_KEY = "global-toast";

export { ACCESS_TOKEN_KEY, AuthState, CONFIRM_CHANGES_DIALOG_KEY, CONFIRM_DIALOG_KEY, ConfirmService, DISPLAY_MODE_KEY, DataSourcePaginator, DataTable, DataTableBuilder, DisplayMode, EmptyMessage, Endpoint, FormDialog, FormDialogWrapper, FormField, FormFieldControl, FormFieldHint, FormFieldLabel, FormFieldValidationErrors, GLOBAL_TOAST_KEY, LANGUAGE_KEY, LegacyDataSourcePaginator, LoadState, LoadStateHandler, LoadingIndicator, LocalizedDatePipe, LocalizedKeysPipe, MenuItemsLocalizer, PaginationFilterOperation, PanelPageHeader, TableToolbar, ThemeService, ThemeToggleButton, ToastService, VIEWPORT_BREAKPOINTS, ViewportService, getDirtyFormValue, shouldShowValidationErrors };
export type { AuthUser, Column, GetDirtyFormValueOptions, LegacyPagination, LegacyPaginationFilter, LegacyPaginationRequest, LegacyPaginationRequestFilter, LegacyPaginationRequestOrder, LegacyPaginatorOptions, MultiSortMeta, PaginatedVista, PaginatedVistaColumn, Pagination, PaginationFilter, PaginationRequest, PaginationRequestOrder, PaginatorOptions, ViewportBreakpoint };
