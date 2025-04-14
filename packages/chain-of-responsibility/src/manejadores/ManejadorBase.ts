import { IManejador } from '../interfaces/IManejador';
import { SolicitudVacaciones } from '../models/SolicitudVacaciones';

export abstract class ManejadorBase implements IManejador {
    private siguienteManejador: IManejador | null = null;

    establecerSiguiente(manejador: IManejador): IManejador {
        this.siguienteManejador = manejador;
        return manejador;
    }

    manejar(solicitud: SolicitudVacaciones): string {
        if (this.siguienteManejador) {
            return this.siguienteManejador.manejar(solicitud);
        }
        return 'Ningún manejador pudo procesar la solicitud';
    }
} 