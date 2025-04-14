import { Gerente } from '../src/manejadores/Gerente';
import { SolicitudVacaciones } from '../src/models/SolicitudVacaciones';

describe('Gerente', () => {
    let gerente: Gerente;
    let solicitud: SolicitudVacaciones;

    beforeEach(() => {
        gerente = new Gerente();
        solicitud = new SolicitudVacaciones('Juan Pérez', 7, 'Vacaciones familiares');
    });

    it('debería aprobar solicitudes de hasta 7 días', () => {
        const resultado = gerente.manejar(solicitud);
        expect(resultado).toBe('Solicitud aprobada por el Gerente para Juan Pérez');
    });

    it('debería pasar la solicitud al siguiente manejador si los días son más de 7', () => {
        solicitud.diasSolicitados = 8;
        const resultado = gerente.manejar(solicitud);
        expect(resultado).toBe('Ningún manejador pudo procesar la solicitud');
    });
}); 