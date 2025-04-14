import { Supervisor } from '../src/manejadores/Supervisor';
import { Gerente } from '../src/manejadores/Gerente';
import { Director } from '../src/manejadores/Director';
import { SolicitudVacaciones } from '../src/models/SolicitudVacaciones';

describe('Cadena de Aprobación', () => {
    let supervisor: Supervisor;
    let gerente: Gerente;
    let director: Director;
    let solicitud: SolicitudVacaciones;

    beforeEach(() => {
        supervisor = new Supervisor();
        gerente = new Gerente();
        director = new Director();

        // Configurar la cadena de responsabilidad
        supervisor.establecerSiguiente(gerente).establecerSiguiente(director);
    });

    it('debería aprobar solicitud de 2 días por el Supervisor', () => {
        solicitud = new SolicitudVacaciones('Juan Pérez', 2, 'Vacaciones familiares');
        const resultado = supervisor.manejar(solicitud);
        expect(resultado).toBe('Solicitud aprobada por el Supervisor para Juan Pérez');
    });

    it('debería aprobar solicitud de 5 días por el Gerente', () => {
        solicitud = new SolicitudVacaciones('Juan Pérez', 5, 'Vacaciones familiares');
        const resultado = supervisor.manejar(solicitud);
        expect(resultado).toBe('Solicitud aprobada por el Gerente para Juan Pérez');
    });

    it('debería aprobar solicitud de 10 días por el Director', () => {
        solicitud = new SolicitudVacaciones('Juan Pérez', 10, 'Vacaciones familiares');
        const resultado = supervisor.manejar(solicitud);
        expect(resultado).toBe('Solicitud aprobada por el Director para Juan Pérez');
    });

    it('debería rechazar solicitud de más de 15 días', () => {
        solicitud = new SolicitudVacaciones('Juan Pérez', 16, 'Vacaciones familiares');
        const resultado = supervisor.manejar(solicitud);
        expect(resultado).toBe('Ningún manejador pudo procesar la solicitud');
    });
}); 