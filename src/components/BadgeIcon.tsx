import * as React from "react";

export type BadgeKey =
  | "first-challenge"
  | "design-master"
  | "code-warrior"
  | "community-helper"
  | "streak-master"
  | "all-rounder"; // optional fallback

type Props = { kind: BadgeKey; className?: string };

export const BadgeIcon: React.FC<Props> = ({ kind, className = "h-4 w-4" }) => {
  // IMPORTANT: boolean values + proper typing
  const common: React.SVGProps<SVGSVGElement> = {
    className,
    viewBox: "0 0 24 24",
    "aria-hidden": true,
    focusable: false,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  switch (kind) {
    case "first-challenge": // 🥇 medal
      return (
        <svg {...common}>
          <circle cx="12" cy="13" r="4" />
          <path d="M9 3l3 4 3-4M9 3h6" />
        </svg>
      );
    case "design-master": // 🎨 palette
      return (
        <svg {...common}>
          <path d="M12 21a9 9 0 1 1 0-18 4 4 0 0 1 0 8h-1a2 2 0 0 0 0 4h1" />
          <circle cx="8.5" cy="9" r="1" />
          <circle cx="10.5" cy="6.5" r="1" />
          <circle cx="14.5" cy="7" r="1" />
          <circle cx="16" cy="10" r="1" />
        </svg>
      );
    case "code-warrior": // ⟨/⟩
      return (
        <svg {...common}>
          <path d="M8 7l-4 5 4 5M16 7l4 5-4 5" />
        </svg>
      );
    case "community-helper": // 💬
      return (
        <svg {...common}>
          <path d="M7 17l-3 3V7a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4H7z" />
          <path d="M8.5 10.5h7" />
        </svg>
      );
    case "streak-master": // 🔥
      return (
        <svg {...common}>
          <path d="M12 3s2 3 2 5a3 3 0 0 1-6 0c0-2 2-5 2-5" />
          <path d="M8 13a4 4 0 1 0 8 0c0-1.5-.6-2.3-1.6-3.4" />
        </svg>
      );
    default: // all-rounder fallback
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" />
          <path d="M9 12h6M12 9v6" />
        </svg>
      );
  }
};
