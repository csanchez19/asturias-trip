import { ItineraryDay } from '../models/itinerary.model';

/**
 * Itinerari real: Ruta en autocaravana per Astúries, Costa, Picos de Europa
 * i Descens del Sella (3-7 d'agost de 2026). `isUnlocked` és l'indicador
 * estàtic de "contingut llest" (els 5 dies estan complets); el bloqueig
 * dinàmic per data real viu a TripStore.dayStatuses, no aquí.
 */
export const ASTURIAS_ITINERARY: ItineraryDay[] = [
  {
    dayNumber: 1,
    date: '2026-08-03',
    title: 'Oviedo Històric i la Costa Daurada',
    subtitle: "Casc antic, recollida de l'autocaravana i primers pobles mariners",
    isUnlocked: true,
    cowRating: '🐮🐮',
    fairyTip:
      "La fada del Fontán xiuxiueja: acompanya la fabada amb aigua, que la Benimar encara no ha après a conduir-se sola. Energia de fada requerida a la tarda: alta.",
    activities: [
      {
        time: '08:00',
        title: "Oviedo històric i consigna de l'equipatge",
        description:
          "Deixem l'equipatge a la consigna i passegem per la Catedral de San Salvador, la Plaça del Fontán, el Parc de San Francisco (amb l'estàtua de la Mafalda) i la Plaça d'Alfons II el Cast.",
        location: 'Oviedo',
        icon: '🏛️',
      },
      {
        time: '12:30',
        title: 'Dinar a Casa Ramón',
        description:
          'Fabada asturiana, verdines amb cloïsses i galtes de porc a la Plaça del Fontán. Millor acompanyar amb aigua o refresc: toca conduir a la tarda.',
        location: 'Plaça del Fontán, Oviedo',
        icon: '🍽️',
      },
      {
        time: '14:00',
        title: "Tren a Lugones i recollida de l'autocaravana",
        description:
          "Rodalies C1 fins a Lugones (8 min) i recollida de la Benimar 119, amb explicació tècnica d'aigua, llums i gas.",
        location: 'Lugones',
        icon: '🚐',
      },
      {
        time: '15:30',
        title: "Ruta per l'A-8 cap a la costa oriental",
        description:
          'Parada a la vila marinera de Lastres, amb vistes des del Mirador de San Roque, i tarda a la Platja de Santa Marina de Ribadesella.',
        location: 'Lastres i Ribadesella',
        icon: '🏖️',
      },
      {
        time: '20:30',
        title: "Trasllat a Arriondas i sopar a l'autocaravana",
        description: "Sopar lleuger preparat a la cuina de l'autocaravana abans del primer descans del viatge.",
        location: 'Arriondas',
        icon: '🌙',
      },
    ],
  },
  {
    dayNumber: 2,
    date: '2026-08-04',
    title: 'Descens del Sella en Caiac i Cangas de Onís',
    subtitle: 'Remada pel riu i sidra a la vila del Pont Romà',
    isUnlocked: true,
    cowRating: '🐮🐮🐮',
    fairyTip:
      "Després de remar tot el Sella, deixa que la sidra escanciada reposi la teva energia de fada. Probabilitat d'acabar amb les sabatilles mullades: 100%.",
    activities: [
      {
        time: '10:45',
        title: 'Aparquem al costat del riu',
        description:
          "Estacionem l'autocaravana a l'aparcament privat de l'empresa de caiacs, a punt per al gran descens.",
        location: 'Arriondas',
        icon: '🚐',
      },
      {
        time: '11:30',
        title: 'Descens del Sella en caiac',
        description:
          "Remada des d'Arriondas fins a Llovio/Ribadesella amb pícnic a les platges fluvials del riu, i tornada en autobús de l'empresa fins a Arriondas.",
        location: 'Riu Sella',
        icon: '🛶',
      },
      {
        time: '16:00',
        title: 'Dutxa i ruta a Cangas de Onís',
        description: "Canvi de roba després del riu i trajecte curt fins a Cangas de Onís.",
        location: 'Arriondas - Cangas de Onís',
        icon: '🚐',
      },
      {
        time: '17:00',
        title: 'Passeig per Cangas de Onís',
        description:
          'El Pont Romà amb la Creu de la Victòria, el Carrer San Pelayo i les botigues tradicionals de formatges Gamoneu i Cabrales.',
        location: 'Cangas de Onís',
        icon: '🏘️',
      },
      {
        time: '20:30',
        title: 'Sopar a la Sidreria Los Puentes',
        description:
          'Sidra natural escanciada, "tortos" de blat de moro amb farcit i ou, taula de formatges asturians i xipirons a la planxa.',
        location: 'Cangas de Onís',
        icon: '🍽️',
      },
    ],
  },
  {
    dayNumber: 3,
    date: '2026-08-05',
    title: 'Picos de Europa: Covadonga, Llacs i Costa de Llanes',
    subtitle: 'Camí entre llacs de muntanya i platges amagades',
    isUnlocked: true,
    cowRating: '🐮🐮🐮🐮🐮',
    fairyTip:
      "Les fades de Covadonga no deixen passar cotxes: puja en el bus ALSA amb calma i guarda forces per als 6 km de camí entre els Llacs Enol i Ercina. Probabilitat de veure vaquetes de muntanya vora el llac: molt alta.",
    activities: [
      {
        time: '08:00',
        title: 'Bus ALSA a Covadonga',
        description:
          'La carretera de muntanya està tancada a vehicles privats, així que pugem en autobús oficial fins al Santuari i la Cova Santa de Covadonga.',
        location: 'Covadonga',
        icon: '🚌',
      },
      {
        time: '09:00',
        title: 'Ruta dels Llacs de Covadonga (PR-PNPE 2)',
        description:
          "Camí circular de 6 km, dificultat fàcil/moderada, entre el Llac Enol, el Llac Ercina, el Mirador d'Entrelagos i les antigues Mines de Buferrera.",
        location: 'Picos de Europa',
        icon: '🥾',
      },
      {
        time: '14:00',
        title: 'Tornada a Cangas de Onís i dinar a l\'autocaravana',
        description: "Retorn en bus i dinar tranquil a la cuina de l'autocaravana després de la caminada.",
        location: 'Cangas de Onís',
        icon: '🍽️',
      },
      {
        time: '16:00',
        title: 'Costa de Llanes: Gulpiyuri i Torimbia',
        description:
          "La Platja de Gulpiyuri, una platja interior formada per l'enfonsament d'una cova marina, la Platja de Torimbia i els penya-segats de Pría.",
        location: 'Llanes',
        icon: '🏖️',
      },
      {
        time: '20:30',
        title: 'Sopar davant el mar',
        description: "Sopar lleuger preparat a l'autocaravana amb vistes a la costa oriental.",
        location: 'Llanes',
        icon: '🌙',
      },
    ],
  },
  {
    dayNumber: 4,
    date: '2026-08-06',
    title: 'Costa Occidental, Cudillero i Posta de Sol al Cap de Peñas',
    subtitle: "Un poble de colors i el far més al nord d'Astúries",
    isUnlocked: true,
    cowRating: '🐮🐮',
    fairyTip:
      "Si el pixín demana sidra, reserva-la per a la nit: encara queda conduir fins al Cap de Peñas. Energia de fada requerida: mitjana-alta.",
    activities: [
      {
        time: '09:00',
        title: "Ruta per l'A-8 cap a ponent",
        description: "Trajecte per l'autovia cap a la costa occidental, deixant enrere Llanes.",
        location: 'A-8',
        icon: '🚐',
      },
      {
        time: '12:00',
        title: "L'amfiteatre de colors de Cudillero",
        description: 'El Port Vell, el Far de Cudillero i les cases de colors enfilades al vessant.',
        location: 'Cudillero',
        icon: '🏘️',
      },
      {
        time: '14:00',
        title: 'Dinar mariner',
        description:
          "Pixín (rap), petxinelles i peix a l'esquena a la Sidreria El Remo o la Sidreria El Pitu. Aigua o refresc si toca conduir després.",
        location: 'Cudillero / El Pito',
        icon: '🍽️',
      },
      {
        time: '16:00',
        title: 'Cap de Peñas a la posta de sol',
        description:
          "El punt més al nord d'Astúries: el seu far, el centre de recepció de visitants i les passarel·les sobre penya-segats de 100 metres.",
        location: 'Cap de Peñas',
        icon: '🗼',
      },
      {
        time: '21:00',
        title: 'Sopar escoltant el mar',
        description: "Sopar a la cuina de l'autocaravana amb el so del Cantàbric de fons.",
        location: 'El Pito, Cudillero',
        icon: '🌙',
      },
    ],
  },
  {
    dayNumber: 5,
    date: '2026-08-07',
    title: "Luanco, Posada a Punt i Devolució de l'Autocaravana",
    subtitle: 'Últim passeig costaner i comiat de la Benimar a Lugones',
    isUnlocked: true,
    cowRating: '🐮',
    fairyTip:
      "Abans de dir adéu a la Benimar, buida bé el cassette: cap fada vol sorpreses d'última hora en la devolució.",
    activities: [
      {
        time: '09:30',
        title: 'Últim passeig per Luanco',
        description:
          "El port marítim, el passeig de la Platja de la Ribera i el Museu Marítim d'Astúries: comiat amb gust de mar.",
        location: 'Luanco',
        icon: '🏘️',
      },
      {
        time: '13:00',
        title: "Dinar d'aprofitament",
        description: "Toca buidar la nevera de l'autocaravana i acabar els últims productes frescos del viatge.",
        location: "A l'autocaravana",
        icon: '🍽️',
      },
      {
        time: '15:00',
        title: 'Posada a punt de la Benimar',
        description:
          "Buidatge del dipòsit d'aigües grises, buidatge i desinfecció del cassette d'aigües negres, ompliment d'aigua neta i repostatge de dièsel fins al nivell d'entrega.",
        location: 'Camí a Lugones',
        icon: '🚐',
      },
      {
        time: '17:00',
        title: "Devolució de l'autocaravana",
        description: 'Arribada a la seu de lloguer a Lugones i lliurament final del vehicle. Fi del viatge.',
        location: 'Lugones',
        icon: '🏁',
      },
    ],
  },
];
