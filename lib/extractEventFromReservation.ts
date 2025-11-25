// import { Reservation } from "@/types/reservation";
// import { EventReservation } from "@/types/EventReservation";

// export function extractEventsFromReservations(reservations: Reservation[]) {
//   const eventsMap: Record<string, EventReservation> = {};

//   reservations.forEach((r) => {
//     if (!r.specialEvent) return;

//     if (!eventsMap[r.specialEvent]) {
//       eventsMap[r.specialEvent] = {
//         eventName: r.specialEvent,
//         reservations: [],
//         date: r.date,
//         startTime: r.startTime,
//         endTime: r.endTime,
//         area: r.area,
//         totalPax: 0,
//         status: "Upcoming",
//       };
//     }

//     eventsMap[r.specialEvent].reservations.push(r);
//     eventsMap[r.specialEvent].totalPax += r.pax;

//     const event = eventsMap[r.specialEvent];
//     if (r.startTime < event.startTime) event.startTime = r.startTime;
//     if (r.endTime > event.endTime) event.endTime = r.endTime;
//   });

//   return Object.values(eventsMap);
// }

import { Reservation } from "@/types/reservation";
import { EventReservation } from "@/types/EventReservation";

export function extractEventsFromReservations(reservations: Reservation[]) {
  // Simply return reservations that contain a special event
  return reservations
    .filter((r) => r.specialEvent && r.specialEvent.trim() !== "")
    .map((r) => ({
      eventName: r.specialEvent!,
      customerName: r.customerName!,
      reservations: [r],  // keep single reservation
      date: r.date,
      startTime: r.startTime,
      endTime: r.endTime,
      area: r.area,
      totalPax: r.pax,
      status: "Upcoming" as const,
    }));
}
