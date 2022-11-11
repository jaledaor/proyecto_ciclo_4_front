export interface Revision {
    RevisionId: string;
    FechaEntrada: Date;
    FechaSalida: Date;
    Observaciones: string;
    vehiculoId: string;
    repuestoId: string;
    mecanicoId: string
}