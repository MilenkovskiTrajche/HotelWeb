import type { IconName } from "../../types";

interface Props { name: IconName; size?: number; strokeWidth?: number; }

export function Icon({ name, size = 20, strokeWidth = 1.7 }: Props) {
  const common = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true };
  const paths: Record<IconName, React.ReactNode> = {
    arrow: <><path d="M5 12h13"/><path d="m13 6 6 6-6 6"/></>,
    calendar: <><rect x="3" y="4" width="18" height="17" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></>,
    check: <path d="m5 12 4 4L19 6"/>,
    chevron: <path d="m6 9 6 6 6-6"/>,
    close: <><path d="M6 6l12 12M18 6 6 18"/></>,
    globe: <><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16"/></>,
    phone: <path d="M6.5 3.5 9 3l2 5-2.5 1.5a15 15 0 0 0 6.5 6.5l1.5-2.5 5 2 .-0.5 2.5a2 2 0 0 1-2.1 1.5C11.6 19.1 4.9 12.4 3.5 4.6A2 2 0 0 1 6.5 3.5Z"/>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></>,
    pin: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>,
    wifi: <><path d="M3 8.5a14 14 0 0 1 18 0M6 12a9 9 0 0 1 12 0M9 15.5a5 5 0 0 1 6 0"/><circle cx="12" cy="19" r="1"/></>,
    air: <><path d="M3 8h13a3 3 0 1 0-3-3"/><path d="M3 12h16a2 2 0 1 1-2 2"/><path d="M3 16h10a2 2 0 1 0-2 2"/></>,
    tv: <><rect x="3" y="5" width="18" height="13" rx="2"/><path d="M8 21h8M12 18v3"/></>,
    bath: <><path d="M4 12h16M5 12v4a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-4M7 12V6a2 2 0 0 1 4 0v1M11 7h5a2 2 0 0 1 2 2"/></>,
    fridge: <><rect x="6" y="3" width="12" height="18" rx="2"/><path d="M6 11h12M10 7v2"/></>,
    kettle: <><path d="M5 11h10v5a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4zM15 13h2a3 3 0 0 0 3-3V7h-4M8 5c0 1 1 1 1 2M11 5c0 1 1 1 1 2"/></>,
    heating: <><path d="M6 4v16M10 4v16M14 4v16M18 4v16"/><path d="M4 4h16M4 20h16"/></>,
    camera: <><path d="M4 8h4l2-2h4l2 2h4v11H4z"/><circle cx="12" cy="13.5" r="3"/></>,
    key: <><circle cx="8" cy="15" r="4"/><path d="m11 12 8-8M16 7l2 2M14 9l2 2"/></>,
    whatsapp: <><path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4A8 8 0 1 1 20 11.5Z"/><path d="M9 8c.4 2 2 3.6 4 4l1-1 2 1c-.2 1-1 1.5-2 1.5-3.2-.3-5.6-2.7-5.9-5.9C8 6.6 8.5 6 9.5 6.5z"/></>,
    viber: <><path d="M7 5c-2 1-2.5 5-.5 8 2 3 5 5 8 4.5l2-2-2.5-2-1.5 1c-1.5-.5-3-2-3.5-3.5l1-1.5-2-2.5z"/><path d="M15 5c2 .5 3.5 2 4 4M15 2.5c3.5.5 6 3 6.5 6.5"/></>,
    instagram: <><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".7" fill="currentColor" stroke="none"/></>,
    facebook: <path d="M14 21v-8h3l.5-3H14V8.2c0-1 .3-1.7 1.8-1.7H18V3.2c-.4-.1-1.5-.2-2.8-.2C12.5 3 11 4.5 11 7v3H8v3h3v8"/>,
    external: <><path d="M14 5h5v5M19 5l-8 8"/><path d="M19 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5"/></>
  };
  return <svg {...common}>{paths[name]}</svg>;
}