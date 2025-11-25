import { Reservation } from "@/types/reservation";

export interface EventReservation {
  eventName: string;
  reservations: Reservation[];
  date: string;
  startTime: string;
  endTime: string;
  area: string;
  totalPax: number;
  status: "Upcoming" | "Completed" | "Cancelled";
}
