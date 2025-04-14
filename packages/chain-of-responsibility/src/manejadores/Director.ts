import { ManejadorBase } from './ManejadorBase';
import { SolicitudVacaciones } from '../models/SolicitudVacaciones';

export class Director extends ManejadorBase {
    manejar(solicitud: SolicitudVacaciones): string {
        if (solicitud.diasSolicitados <= 15) {
            return `Solicitud aprobada por el Director para ${solicitud.empleado}`;
        }
        return super.manejar(solicitud);
    }
} 