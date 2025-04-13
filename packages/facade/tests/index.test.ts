import { TravelAgencyFacade } from '../src/index';
//
describe('TravelAgencyFacade', () => {
    let facade: TravelAgencyFacade;

    beforeEach(() => {
        facade = new TravelAgencyFacade();
    });

    it('should book a complete trip successfully', () => {
        const passengerInfo = { name: 'John Doe', passport: 'AB123456' };
        const dates = { departure: '2023-05-10', return: '2023-05-20' };
        const options = { hotelStars: 4, includeTransport: true };

        const result = facade.bookCompleteTrip('Paris', dates, passengerInfo, options);

        expect(result.success).toBeTruthy();
        expect(result.details.flight).toContain('Vuelo1-Paris');
        expect(result.details.hotel).toContain('Hotel1-4stars');
        expect(result.details.transport).toContain('Transporte-Paris Airport-Hotel1-4stars');
    });

    it('should fail when no flights are available', () => {
        // Podríamos mockear el AirlineSystem para simular que no hay vuelos
        // Pero por simplicidad, probamos con un destino que sabemos no tendrá vuelos
        const passengerInfo = { name: 'John Doe', passport: 'AB123456' };
        const dates = { departure: '2023-05-10', return: '2023-05-20' };
        const options = { hotelStars: 4, includeTransport: true };

        const result = facade.bookCompleteTrip('NoFlightDestination', dates, passengerInfo, options);

        expect(result.success).toBeFalsy();
        expect(result.details).toBe('No hay vuelos disponibles');
    });

    it('should book trip without transport if not included in options', () => {
        const passengerInfo = { name: 'John Doe', passport: 'AB123456' };
        const dates = { departure: '2023-05-10', return: '2023-05-20' };
        const options = { hotelStars: 4, includeTransport: false };

        const result = facade.bookCompleteTrip('Paris', dates, passengerInfo, options);

        expect(result.success).toBeTruthy();
        expect(result.details.transport).toBeNull();
    });
});