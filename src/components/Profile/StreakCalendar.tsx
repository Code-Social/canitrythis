import React, { useEffect, useMemo, useState } from "react";

type StreakCalendarProps = {
  /** localStorage key for ISO-date strings */
  storageKey?: string;
};

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
  return keys;
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

const StreakCalendar: React.FC<StreakCalendarProps> = ({
  storageKey = "cit_activeDates",
}) => {
  const [activeSet, setActiveSet] = useState<Set<string>>(new Set());

  // read once on mount
  useEffect(() => {
    setActiveSet(readActiveSet(storageKey));
  }, [storageKey]);

  const dateKeys = useMemo(() => lastNDaysKeys(30), []);
  const todayKey = dateKeys[dateKeys.length - 1];
  const currentStreak = useMemo(
    () => countCurrentStreak(dateKeys, activeSet),
    [dateKeys, activeSet]
  );

  return (
    <div>
      {/* 7 columns grid; 30 cells -> last row will have 2 cells */}
      <div
        className="grid grid-cols-7 gap-1"
        role="grid"
        aria-label="Last 30 days activity"
      >
        {dateKeys.map((key) => {
          const active = activeSet.has(key);
          const isToday = key === todayKey;

          const base =
            "w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-[4px] border outline-none " +
            "focus:ring-2 focus:ring-offset-1 focus:ring-indigo-500 dark:focus:ring-indigo-400 " +
            "focus:ring-offset-white dark:focus:ring-offset-gray-800 transition-transform";
          const state = active
            ? "bg-emerald-500 dark:bg-emerald-400 border-emerald-600 dark:border-emerald-400"
            : "bg-transparent border-gray-300 dark:border-gray-600";
          const ring = isToday
            ? "ring-1 ring-indigo-500 dark:ring-indigo-400 ring-offset-1 ring-offset-white dark:ring-offset-gray-800"
            : "";
          const readable = new Date(key).toLocaleDateString(undefined, {
            weekday: "short",
            month: "short",
            day: "numeric",
          });

          return (
            <button
              key={key}
              role="gridcell"
              className={`${base} ${state} ${ring}`}
              title={`${readable} • ${active ? "Active" : "Inactive"}`}
              aria-label={`${readable} — ${active ? "Active" : "Inactive"}`}
              aria-selected={active}
              tabIndex={0}
            />
          );
        })}
      </div>

      <div className="mt-3 flex items-center justify-between text-sm">
        <div className="text-gray-700 dark:text-gray-300">
          <span className="font-medium">Current Streak:</span>{" "}
          {currentStreak} {currentStreak === 1 ? "day" : "days"}
        </div>

        {/* tiny legend */}
        <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
          <span className="inline-flex items-center">
            <span className="w-3 h-3 rounded-[3px] bg-emerald-500 dark:bg-emerald-400 border border-emerald-600 dark:border-emerald-400 mr-1" />
            Active
          </span>
          <span className="inline-flex items-center">
            <span className="w-3 h-3 rounded-[3px] border border-gray-300 dark:border-gray-600 mr-1" />
            Inactive
          </span>
          <span className="inline-flex items-center">
            <span className="w-3 h-3 rounded-[3px] border border-gray-300 dark:border-gray-600 ring-1 ring-indigo-500 dark:ring-indigo-400 ring-offset-1 ring-offset-white dark:ring-offset-gray-800 mr-1" />
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
