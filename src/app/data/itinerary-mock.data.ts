import { ItineraryDay } from '../models/itinerary.model';

/**
 * Itinerario real: Ruta en Camper por Asturias, Costa, Picos de Europa y
 * Descenso del Sella (3-7 agosto 2026). `isUnlocked` es el flag estatico de
 * "contenido listo" (los 5 dias estan completos); el bloqueo dinamico por
 * fecha real vive en TripStore.dayStatuses, no aqui.
 */
export const ASTURIAS_ITINERARY: ItineraryDay[] = [
  {
    dayNumber: 1,
    date: '2026-08-03',
    title: 'Oviedo Historico y la Costa Dorada',
    subtitle: 'Casco antiguo, recogida de la camper y primeros pueblos marineros',
    isUnlocked: true,
    cowRating: '🐮🐮',
    fairyTip:
      'El hada del Fontan susurra: acompaña la fabada con agua, que la Benimar aun no ha aprendido a conducirse sola. Energia de hada requerida por la tarde: alta.',
    activities: [
      {
        time: '08:00',
        title: 'Oviedo historico y consigna de equipaje',
        description:
          'Dejamos el equipaje en consigna y paseamos por la Catedral de San Salvador, la Plaza del Fontan, el Parque de San Francisco (con la estatua de Mafalda) y la Plaza de Alfonso II el Casto.',
        location: 'Oviedo',
        icon: '🏛️',
      },
      {
        time: '12:30',
        title: 'Almuerzo en Casa Ramon',
        description:
          'Fabada asturiana, verdinas con almejas y carrilleras en la Plaza del Fontan. Mejor acompañar con agua o refresco: toca conducir por la tarde.',
        location: 'Plaza del Fontan, Oviedo',
        icon: '🍽️',
      },
      {
        time: '14:00',
        title: 'Tren a Lugones y recogida de la camper',
        description:
          'Cercanias C1 hasta Lugones (8 min) y recogida de la Benimar 119, con briefing tecnico de agua, luces y gas.',
        location: 'Lugones',
        icon: '🚐',
      },
      {
        time: '15:30',
        title: 'Ruta por la A-8 hacia la costa oriental',
        description:
          'Parada en la villa marinera de Lastres, con vistas desde el Mirador de San Roque, y tarde en la Playa de Santa Marina de Ribadesella.',
        location: 'Lastres y Ribadesella',
        icon: '🏖️',
      },
      {
        time: '20:30',
        title: 'Traslado a Arriondas y cena en la camper',
        description: 'Cena ligera preparada en la cocina de la camper antes del primer descanso del viaje.',
        location: 'Arriondas',
        icon: '🌙',
      },
    ],
  },
  {
    dayNumber: 2,
    date: '2026-08-04',
    title: 'Descenso del Sella en Canoa y Cangas de Onis',
    subtitle: 'Remada por el rio y sidra en la villa del Puente Romano',
    isUnlocked: true,
    cowRating: '🐮🐮🐮',
    fairyTip:
      'Tras remar todo el Sella, deja que la sidra escanciada reponga tu energia de hada. Probabilidad de acabar con las zapatillas mojadas: 100%.',
    activities: [
      {
        time: '10:45',
        title: 'Aparcamos junto al rio',
        description: 'Estacionamos la camper en el parking privado de la empresa de canoas, listos para el gran descenso.',
        location: 'Arriondas',
        icon: '🚐',
      },
      {
        time: '11:30',
        title: 'Descenso del Sella en canoa',
        description:
          'Remada desde Arriondas hasta Llovio/Ribadesella con picnic en las playas fluviales del rio, y vuelta en autobus de la empresa hasta Arriondas.',
        location: 'Rio Sella',
        icon: '🛶',
      },
      {
        time: '16:00',
        title: 'Ducha y ruta a Cangas de Onis',
        description: 'Cambio de ropa tras el rio y trayecto corto hasta Cangas de Onis.',
        location: 'Arriondas - Cangas de Onis',
        icon: '🚐',
      },
      {
        time: '17:00',
        title: 'Paseo por Cangas de Onis',
        description:
          'El Puente Romano con la Cruz de la Victoria, la Calle San Pelayo y las tiendas tradicionales de quesos Gamoneu y Cabrales.',
        location: 'Cangas de Onis',
        icon: '🏘️',
      },
      {
        time: '20:30',
        title: 'Cena en Sidreria Los Puentes',
        description:
          'Sidra natural escanciada, tortos de maiz con picadillo y huevo, tabla de quesos asturianos y chipirones a la plancha.',
        location: 'Cangas de Onis',
        icon: '🍽️',
      },
    ],
  },
  {
    dayNumber: 3,
    date: '2026-08-05',
    title: 'Picos de Europa: Covadonga, Lagos y Costa de Llanes',
    subtitle: 'Sendero entre lagos de montaña y playas escondidas',
    isUnlocked: true,
    cowRating: '🐮🐮🐮🐮🐮',
    fairyTip:
      'Las hadas de Covadonga no dejan pasar coches: sube en el bus ALSA con calma y guarda fuerzas para los 6 km de sendero entre los Lagos Enol y Ercina. Probabilidad de ver vaquitas de montaña junto al lago: muy alta.',
    activities: [
      {
        time: '08:00',
        title: 'Bus ALSA a Covadonga',
        description:
          'La carretera de montaña esta cerrada a vehiculos privados, asi que subimos en autobus oficial hasta el Santuario y la Cueva Santa de Covadonga.',
        location: 'Covadonga',
        icon: '🚌',
      },
      {
        time: '09:00',
        title: 'Ruta de los Lagos de Covadonga (PR-PNPE 2)',
        description:
          'Sendero circular de 6 km, dificultad facil/moderada, entre el Lago Enol, el Lago Ercina, el Mirador de Entrelagos y las antiguas Minas de Buferrera.',
        location: 'Picos de Europa',
        icon: '🥾',
      },
      {
        time: '14:00',
        title: 'Vuelta a Cangas de Onis y comida en la camper',
        description: 'Regreso en bus y comida tranquila en la cocina de la camper tras la caminata.',
        location: 'Cangas de Onis',
        icon: '🍽️',
      },
      {
        time: '16:00',
        title: 'Costa de Llanes: Gulpiyuri y Torimbia',
        description:
          'La Playa de Gulpiyuri, una playa interior formada por el hundimiento de una cueva marina, la Playa de Torimbia y los acantilados de Pria.',
        location: 'Llanes',
        icon: '🏖️',
      },
      {
        time: '20:30',
        title: 'Cena frente al mar',
        description: 'Cena ligera preparada en la camper con vistas a la costa oriental.',
        location: 'Llanes',
        icon: '🌙',
      },
    ],
  },
  {
    dayNumber: 4,
    date: '2026-08-06',
    title: 'Costa Occidental, Cudillero y Atardecer en Cabo de Peñas',
    subtitle: 'Un pueblo de colores y el faro mas al norte de Asturias',
    isUnlocked: true,
    cowRating: '🐮🐮',
    fairyTip:
      'Si el pixin pide sidra, resérvala para la noche: aun queda conducir hasta el Cabo de Peñas. Energia de hada requerida: media-alta.',
    activities: [
      {
        time: '09:00',
        title: 'Ruta por la A-8 hacia poniente',
        description: 'Trayecto por la autovia hacia la costa occidental, dejando atras Llanes.',
        location: 'A-8',
        icon: '🚐',
      },
      {
        time: '12:00',
        title: 'El anfiteatro de colores de Cudillero',
        description: 'El Puerto Viejo, el Faro de Cudillero y las casas de colores encaramadas a la ladera.',
        location: 'Cudillero',
        icon: '🏘️',
      },
      {
        time: '14:00',
        title: 'Almuerzo marinero',
        description:
          'Pixin (rape), zamburiñas y pescado a la espalda en la Sidreria El Remo o la Sidreria El Pitu. Agua o refresco si toca conducir despues.',
        location: 'Cudillero / El Pito',
        icon: '🍽️',
      },
      {
        time: '16:00',
        title: 'Cabo de Peñas al atardecer',
        description:
          'El punto mas al norte de Asturias: su faro, el centro de recepcion de visitantes y las pasarelas sobre acantilados de 100 metros.',
        location: 'Cabo de Peñas',
        icon: '🗼',
      },
      {
        time: '21:00',
        title: 'Cena escuchando el mar',
        description: 'Cena en la cocina de la camper con el sonido del Cantabrico de fondo.',
        location: 'El Pito, Cudillero',
        icon: '🌙',
      },
    ],
  },
  {
    dayNumber: 5,
    date: '2026-08-07',
    title: 'Luanco, Puesta a Punto y Devolucion de la Camper',
    subtitle: 'Ultimo paseo costero y despedida de la Benimar en Lugones',
    isUnlocked: true,
    cowRating: '🐮',
    fairyTip:
      'Antes de decir adios a la Benimar, vacia bien el cassette: ninguna hada quiere sorpresas de ultima hora en la devolucion.',
    activities: [
      {
        time: '09:30',
        title: 'Ultimo paseo por Luanco',
        description:
          'El puerto maritimo, el paseo de la Playa de la Ribera y el Museo Maritimo de Asturias: despedida con sabor a mar.',
        location: 'Luanco',
        icon: '🏘️',
      },
      {
        time: '13:00',
        title: 'Comida de aprovechamiento',
        description: 'Toca vaciar la nevera de la camper y rematar los ultimos productos frescos del viaje.',
        location: 'En la camper',
        icon: '🍽️',
      },
      {
        time: '15:00',
        title: 'Puesta a punto de la Benimar',
        description:
          'Vaciado del deposito de aguas grises, vaciado y desinfeccion del cassette de aguas negras, llenado de agua limpia y repostaje de diesel hasta el nivel de entrega.',
        location: 'Camino a Lugones',
        icon: '🚐',
      },
      {
        time: '17:00',
        title: 'Devolucion de la camper',
        description: 'Llegada a la sede de alquiler en Lugones y entrega final del vehiculo. Fin del viaje.',
        location: 'Lugones',
        icon: '🏁',
      },
    ],
  },
];
