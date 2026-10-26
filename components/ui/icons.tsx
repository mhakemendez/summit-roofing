import type { SVGProps } from "react";

export type IconName =
  | "arrow-right"
  | "arrow-up-right"
  | "phone"
  | "pin"
  | "check"
  | "menu"
  | "close"
  | "quote"
  | "roof"
  | "replacement"
  | "repair"
  | "storm"
  | "inspection"
  | "commercial"
  | "layers"
  | "pricing"
  | "calendar";

type IconProps = SVGProps<SVGSVGElement> & {
  name: IconName;
};

const strokeProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

export function Icon({ name, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      {...strokeProps}
      {...props}
    >
      {name === "arrow-right" && (
        <>
          <path d="M5 12h14" />
          <path d="m13 6 6 6-6 6" />
        </>
      )}
      {name === "arrow-up-right" && (
        <>
          <path d="M7 17 17 7" />
          <path d="M8 7h9v9" />
        </>
      )}
      {name === "phone" && (
        <path d="M8.5 3.5H6A2.5 2.5 0 0 0 3.5 6c0 8 6.5 14.5 14.5 14.5A2.5 2.5 0 0 0 20.5 18v-2.5l-4-1.5-1.4 2.4a13.5 13.5 0 0 1-7-7L10.5 8l-2-4.5Z" />
      )}
      {name === "pin" && (
        <>
          <path d="M20 10c0 5.5-8 11-8 11s-8-5.5-8-11a8 8 0 1 1 16 0Z" />
          <circle cx="12" cy="10" r="2.5" />
        </>
      )}
      {name === "check" && <path d="m5 12.5 4.2 4.2L19 7" />}
      {name === "menu" && (
        <>
          <path d="M4 7h16" />
          <path d="M4 12h16" />
          <path d="M4 17h16" />
        </>
      )}
      {name === "close" && (
        <>
          <path d="m6 6 12 12" />
          <path d="M18 6 6 18" />
        </>
      )}
      {name === "quote" && (
        <path
          d="M7.2 10.7H4.5c0-2.1 1-3.7 3-4.7l.9 1.4c-1.1.6-1.7 1.4-1.8 2.4h2.1v4.9H4.8v-4Zm8.1 0h-2.7c0-2.1 1-3.7 3-4.7l.9 1.4c-1.1.6-1.7 1.4-1.8 2.4h2.1v4.9h-3.9v-4Z"
          fill="currentColor"
          stroke="none"
        />
      )}
      {name === "roof" && (
        <>
          <path d="M3.5 11 12 4l8.5 7" />
          <path d="M6 9.8V20h12V9.8" />
          <path d="M10 20v-5.5h4V20" />
        </>
      )}
      {name === "replacement" && (
        <>
          <path d="M3.5 10.5 12 3.5l8.5 7" />
          <path d="M6 9.2V20h12V9.2" />
          <path d="M9 15h6" />
          <path d="m13 12.5 2.5 2.5-2.5 2.5" />
        </>
      )}
      {name === "repair" && (
        <>
          <path d="M3.5 10.5 12 3.5l8.5 7" />
          <path d="M6 9.2V20h5" />
          <path d="m14.5 13 5.5 5.5a2.1 2.1 0 0 1-3 3L11.5 16" />
          <path d="M14.4 9.3a3.8 3.8 0 0 0 4.3 5.2l-4.8 1.3-1.3-4.8a3.8 3.8 0 0 0 1.8-1.7Z" />
        </>
      )}
      {name === "storm" && (
        <>
          <path d="M7.2 17.5H6a3.8 3.8 0 0 1-.5-7.6 5.4 5.4 0 0 1 10.3-1.3 4 4 0 0 1 1.4 7.7" />
          <path d="m12.3 13.5-2.1 3.8h3l-2.1 3.7" />
          <path d="M18.5 18.5 21 16" />
        </>
      )}
      {name === "inspection" && (
        <>
          <circle cx="10.5" cy="10.5" r="6.5" />
          <path d="m15.5 15.5 5 5" />
          <path d="m7.5 10.5 2 2 4-4" />
        </>
      )}
      {name === "commercial" && (
        <>
          <path d="M4 21V7.5L12 3l8 4.5V21" />
          <path d="M3 21h18" />
          <path d="M8 10h2M14 10h2M8 14h2M14 14h2" />
          <path d="M10 21v-4h4v4" />
        </>
      )}
      {name === "layers" && (
        <>
          <path d="m12 3.5 8.5 4.7-8.5 4.8-8.5-4.8L12 3.5Z" />
          <path d="m3.5 12 8.5 4.8 8.5-4.8" />
          <path d="m3.5 16.2 8.5 4.8 8.5-4.8" />
        </>
      )}
      {name === "pricing" && (
        <>
          <path d="M6 3.5h12v17l-3-2-3 2-3-2-3 2v-17Z" />
          <path d="M9 8h6M9 12h6" />
        </>
      )}
      {name === "calendar" && (
        <>
          <rect x="3.5" y="5" width="17" height="15.5" rx="2" />
          <path d="M7.5 3v4M16.5 3v4M3.5 9.5h17" />
          <path d="M8 13h2M14 13h2M8 16.5h2M14 16.5h2" />
        </>
      )}
    </svg>
  );
}
