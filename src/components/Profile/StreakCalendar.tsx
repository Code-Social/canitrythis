import React, { useEffect, useMemo, useState } from "react";

type StreakCalendarProps = {
  /** localStorage key for ISO-date strings (YYYY-MM-DD) */
  storageKey?: string;
};

/* ---------------- helpers ---------------- */
const pad = (n: number) => String(n).padStart(2, "0");
const toKey = (d: Date) =>
  `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;

const lastNDaysKeys = (n: number) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const keys: string[] = [];
  for (let i = n - 1; i >= 0; i--) {
    const dt = new Date(today);
    dt.setDate(today.getDate() - i);
    keys.push(toKey(dt));
  }
  return keys; // oldest -> newest (today last)
};

const readActiveSet = (storageKey: string) => {
  try {
    const raw = localStorage.getItem(storageKey);
    if (!raw) return new Set<string>();
    const arr = JSON.parse(raw);
    if (!Array.isArray(arr)) return new Set<string>();
    return new Set<string>(arr.filter((x) => typeof x === "string"));
  } catch {
    return new Set<string>();
  }
};

const countCurrentStreak = (orderedKeys: string[], activeSet: Set<string>) => {
  // orderedKeys oldest -> newest (today is last)
  let count = 0;
  for (let i = orderedKeys.length - 1; i >= 0; i--) {
    if (activeSet.has(orderedKeys[i])) count++;
    else break;
  }
  return count;
};

const WEEKDAYS = ["S", "M", "T", "W", "T", "F", "S"];
const fmtReadable = (k: string) =>
  new Date(k).toLocaleDateString(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric",
  });

// "Aug 03 → Sep 01"
const fmtRange = (startKey: string, endKey: string) => {
  const f = (k: string) =>
    new Date(k).toLocaleDateString(undefined, { month: "short", day: "2-digit" });
  return `${f(startKey)} → ${f(endKey)}`;
};

// "August 2025"  or  "Aug–Sep 2025"
const monthHeaderLabel = (startKey: string, endKey: string) => {
  const s = new Date(startKey);
  const e = new Date(endKey);
  const sameMonth = s.getMonth() === e.getMonth() && s.getFullYear() === e.getFullYear();
  if (sameMonth) {
    return s.toLocaleString(undefined, { month: "long", year: "numeric" });
  }
  const left = s.toLocaleString(undefined, { month: "short" });
  const right = e.toLocaleString(undefined, { month: "short", year: "numeric" });
  return `${left}–${right}`;
};

/* ---------------- component ---------------- */
const StreakCalendar: React.FC<StreakCalendarProps> = ({
  storageKey = "cit_activeDates",
}) => {
  const [activeSet, setActiveSet] = useState<Set<string>>(new Set());

  useEffect(() => {
    setActiveSet(readActiveSet(storageKey));
  }, [storageKey]);

  const dateKeys = useMemo(() => lastNDaysKeys(30), []);
  const todayKey = dateKeys[dateKeys.length - 1];
  const startKey = dateKeys[0];
  const endKey = todayKey;

  const currentStreak = useMemo(
    () => countCurrentStreak(dateKeys, activeSet),
    [dateKeys, activeSet]
  );

  return (
    <div>
      {/* Month label + date range */}
      <div className="mb-1 flex items-center justify-between text-xs">
        <div className="text-gray-800 dark:text-gray-200 font-medium">
          {monthHeaderLabel(startKey, endKey)}
        </div>
        <div className="text-gray-500 dark:text-gray-400">{fmtRange(startKey, endKey)}</div>
      </div>

      {/* Weekday header */}
<div className="grid grid-cols-7 gap-2 text-[11px] sm:text-xs text-gray-500 dark:text-gray-400">
  {WEEKDAYS.map((d, i) => (
    <div key={`${d}-${i}`} className="text-center">
      {d}
    </div>
  ))}
</div>


      {/* Month markers row: show label where the date is the 1st */}
      <div className="grid grid-cols-7 gap-2 mt-1 mb-2 text-[10px] sm:text-[11px] text-gray-500 dark:text-gray-400">
        {dateKeys.map((k) => {
          const d = new Date(k);
          return (
            <div key={`m-${k}`} className="text-center">
              {d.getDate() === 1
                ? d.toLocaleString(undefined, { month: "short" })
                : ""}
            </div>
          );
        })}
      </div>

      {/* Numbered month-style grid for last 30 days */}
      <div
        className="grid grid-cols-7 gap-2"
        role="grid"
        aria-label="Last 30 days activity"
      >
        {dateKeys.map((key) => {
          const d = new Date(key);
          const dayNum = d.getDate();
          const active = activeSet.has(key);
          const isToday = key === todayKey;
          const isFirstOfMonth = dayNum === 1;

          const circleBase =
            "relative h-7 w-7 sm:h-8 sm:w-8 rounded-full flex items-center justify-center " +
            "text-[12px] sm:text-[13px] outline-none transition-transform " +
            "focus:ring-2 focus:ring-offset-1 focus:ring-indigo-500 dark:focus:ring-indigo-400 " +
            "focus:ring-offset-white dark:focus:ring-offset-gray-800";

          const circleState = active
            ? "bg-emerald-500 dark:bg-emerald-400 text-white border border-emerald-600 dark:border-emerald-400"
            : "text-gray-600 dark:text-gray-300 border border-transparent hover:border-gray-300 dark:hover:border-gray-600";

          const todayRing = isToday
            ? "ring-1 ring-indigo-500 dark:ring-indigo-400 ring-offset-1 ring-offset-white dark:ring-offset-gray-800"
            : "";

          const readable = fmtReadable(key);

          return (
            <button
              key={key}
              role="gridcell"
              className={`${circleBase} ${circleState} ${todayRing}`}
              title={`${readable} • ${active ? "Active" : "Inactive"}`}
              aria-label={`${readable} — ${active ? "Active" : "Inactive"}`}
              aria-selected={active}
              tabIndex={0}
            >
              {/* Day number */}
              <span className="leading-none">{dayNum}</span>

              {/* Tiny red dot to hint new month when not active */}
              {isFirstOfMonth && !active && (
                <span className="absolute -bottom-0.5 h-1.5 w-1.5 rounded-full bg-rose-500" />
              )}
            </button>
          );
        })}
      </div>

      {/* Current streak + legend */}
      <div className="mt-3 flex items-center justify-between text-sm">
        <div className="text-gray-700 dark:text-gray-300">
          <span className="font-medium">Current Streak:</span>{" "}
          {currentStreak} {currentStreak === 1 ? "day" : "days"}
        </div>
        <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
          <span className="inline-flex items-center">
            <span className="h-3 w-3 rounded-full bg-emerald-500 dark:bg-emerald-400 border border-emerald-600 dark:border-emerald-400 mr-1" />
            Active
          </span>
          <span className="inline-flex items-center">
            <span className="h-3 w-3 rounded-full border border-gray-300 dark:border-gray-600 mr-1" />
            Inactive
          </span>
          <span className="inline-flex items-center">
            <span className="h-3 w-3 rounded-full border border-gray-300 dark:border-gray-600 ring-1 ring-indigo-500 dark:ring-indigo-400 ring-offset-[2px] ring-offset-white dark:ring-offset-gray-800 mr-1" />
            Today
          </span>
        </div>
      </div>

      <p className="mt-2 text-[11px] text-gray-500 dark:text-gray-400">
        Stored locally on your device.
      </p>
    </div>
  );
};

export default StreakCalendar;
