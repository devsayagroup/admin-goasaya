type RoomKey =
  | "glass_room"
  | "vip_hole"
  | "vip_cave"
  | "main_dining"
  | "whole_goa";

const ROOM_LABELS: Record<RoomKey, string> = {
  glass_room: "Glass Room",
  vip_hole: "VIP The Hole",
  vip_cave: "VIP The Cave",
  main_dining: "Main Dining Room",
  whole_goa: "A Whole Goa",
};

export function RoomName({ roomKey }: { roomKey: RoomKey }) {
  return <span>{ROOM_LABELS[roomKey] ?? roomKey}</span>;
}
