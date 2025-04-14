import { Supervisor } from '../src/manejadores/Supervisor';
import { SolicitudVacaciones } from '../src/models/SolicitudVacaciones';

describe('Supervisor', () => {
    let supervisor: Supervisor;
    let solicitud: SolicitudVacaciones;

    beforeEach(() => {
        supervisor = new Supervisor();
        solicitud = new SolicitudVacaciones('Juan Pérez', 3, 'Vacaciones familiares');
    });

    it('debería aprobar solicitudes de hasta 3 días', () => {
        const resultado = supervisor.manejar(solicitud);
        expect(resultado).toBe('Solicitud aprobada por el Supervisor para Juan Pérez');
    });

    it('debería pasar la solicitud al siguiente manejador si los días son más de 3', () => {
        solicitud.diasSolicitados = 4;
        const resultado = supervisor.manejar(solicitud);
        expect(resultado).toBe('Ningún manejador pudo procesar la solicitud');
    });
}); 