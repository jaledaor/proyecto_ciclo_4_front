import { Revision } from "./revision.interface";

export interface Vehiculo {
    VehiculoId: string;
    Placa: string;
    Tipo: string;
    Marca: string;
    Modelo: number;
    NumeroPasajeros: number;
    Cilindraje: number;
    Pais: string;
    Descripcion: string;
    clienteId: string;
    revisions?: Revision[];
  }