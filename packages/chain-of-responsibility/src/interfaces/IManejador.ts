import { SolicitudVacaciones } from "../models/SolicitudVacaciones";

export interface IManejador {
    establecerSiguiente(manejador: IManejador): IManejador;
    manejar(solicitud: SolicitudVacaciones): string;
} 