import { ManejadorBase } from './ManejadorBase';
import { SolicitudVacaciones } from '../models/SolicitudVacaciones';

export class Gerente extends ManejadorBase {
    manejar(solicitud: SolicitudVacaciones): string {
        if (solicitud.diasSolicitados <= 7) {
            return `Solicitud aprobada por el Gerente para ${solicitud.empleado}`;
        }
        return super.manejar(solicitud);
    }
} 