import { Director } from '../src/manejadores/Director';
import { SolicitudVacaciones } from '../src/models/SolicitudVacaciones';

describe('Director', () => {
    let director: Director;
    let solicitud: SolicitudVacaciones;

    beforeEach(() => {
        director = new Director();
        solicitud = new SolicitudVacaciones('Juan Pérez', 15, 'Vacaciones familiares');
    });

    it('debería aprobar solicitudes de hasta 15 días', () => {
        const resultado = director.manejar(solicitud);
        expect(resultado).toBe('Solicitud aprobada por el Director para Juan Pérez');
    });

    it('debería devolver mensaje de error si los días son más de 15', () => {
        solicitud.diasSolicitados = 16;
        const resultado = director.manejar(solicitud);
        expect(resultado).toBe('Ningún manejador pudo procesar la solicitud');
    });
}); 