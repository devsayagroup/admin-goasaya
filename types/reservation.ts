// // export interface Reservation {
// //   id: string;
// //   name: string;
// //   date: string;
// //   startTime: string;
// //   endTime: string;
// //   pax: number;
// //   area: string;
// //   specialEvent: string;
// // }

// export type Reservation = {
//   id: string; // R20251118001
//   customerId: string; 
//   customerName: string;
//   date: string; // YYYY-MM-DD
//   startTime: string; // HH:mm
//   endTime: string;   // HH:mm
//   // area: "Smoking" | "No Smoking" | "E-Cigarette" | "The Cave" | "The Hole";
//   area: string;
//   pax: number;
//   specialEvent?: string; // optional
//   status: "Confirmed" | "Pending" | "Cancelled";
// };


export type Reservation = {
  id: string,
  customerId: string,
  customerName: string,
  date: string,
  startTime: string,
  endTime: string,
  area: "vip_hole" | "vip_cave" | "main_dining" | "glass_room" | "whole_goa",
  pax: number,
  specialEvent: string,
  status: "Confirmed" | "Pending" | "Cancelled"
}

