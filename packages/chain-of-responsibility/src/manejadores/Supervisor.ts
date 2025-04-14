import { ManejadorBase } from './ManejadorBase';
import { SolicitudVacaciones } from '../models/SolicitudVacaciones';

export class Supervisor extends ManejadorBase {
    manejar(solicitud: SolicitudVacaciones): string {
        if (solicitud.diasSolicitados <= 3) {
            return `Solicitud aprobada por el Supervisor para ${solicitud.empleado}`;
        }
        return super.manejar(solicitud);
    }
} 