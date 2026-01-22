"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Clock,
  History,
  AlertTriangle,
  RotateCcw,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function SessionTimer() {
  // State
  const [logs, setLogs] = useState<number[]>([]);
  const [elapsed, setElapsed] = useState<number>(0);
  const [isActive, setIsActive] = useState(false);

  // Load from LocalStorage on Mount
  useEffect(() => {
    const savedLogs = localStorage.getItem("white-line-logs");
    if (savedLogs) {
      const parsed = JSON.parse(savedLogs);
      setLogs(parsed);

      // If there is a log, the timer is active relative to the LAST log
      if (parsed.length > 0) {
        setIsActive(true);
      }
    }
  }, []);

  // Timer Logic
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isActive && logs.length > 0) {
      interval = setInterval(() => {
        const lastDoseTime = logs[0]; // Most recent log is at index 0
        const now = Date.now();
        setElapsed(now - lastDoseTime);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isActive, logs]);

  // Actions
  const handleLogDose = () => {
    const now = Date.now();
    const newLogs = [now, ...logs]; // Add new time to start of array
    setLogs(newLogs);
    setIsActive(true);
    setElapsed(0);
    localStorage.setItem("white-line-logs", JSON.stringify(newLogs));
  };

  const handleReset = () => {
    if (confirm("Clear all session history? This cannot be undone.")) {
      setLogs([]);
      setIsActive(false);
      setElapsed(0);
      localStorage.removeItem("white-line-logs");
    }
  };

  // Formatting
  const formatTime = (ms: number) => {
    const totalSeconds = Math.floor(ms / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const pad = (n: number) => n.toString().padStart(2, "0");
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  };

  // Safety Checks
  const minutesPassed = Math.floor(elapsed / 60000);
  const isDangerZone = minutesPassed < 45 && logs.length > 0;

  return (
    <div className="min-h-screen bg-white px-6 py-12 md:px-12 lg:px-24">
      {/* Navigation */}
      <div className="mx-auto mb-12 max-w-2xl">
        <Link
          href="/tools"
          className="group inline-flex items-center gap-2 font-sans text-xs font-bold tracking-widest text-neutral-400 uppercase transition-colors hover:text-black"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Toolkit
        </Link>
      </div>

      <div className="mx-auto max-w-2xl">
        {/* Header */}
        <header className="mb-12 border-b border-black pb-8">
          <span className="mb-4 block font-sans text-xs font-bold tracking-[0.3em] text-neutral-400 uppercase">
            Chronometer
          </span>
          <h1 className="mb-4 font-sans text-4xl font-black tracking-tighter text-black uppercase">
            Session Timer.
          </h1>
          <p className="font-serif text-neutral-600">
            Track the interval between doses to prevent accumulation (stacking).
            Metabolic processing typically requires 45–60 minutes per dose.
          </p>
        </header>

        {/* THE CLOCK */}
        <div className="mb-12 flex flex-col items-center justify-center border-y border-neutral-100 py-16">
          <div className="mb-4 font-sans text-[10px] font-bold tracking-widest text-neutral-400 uppercase">
            Time Since Last Dose
          </div>

          <div
            className={cn(
              "font-sans text-7xl font-black tracking-tighter tabular-nums transition-colors md:text-8xl",
              isDangerZone ? "text-red-600" : "text-black",
            )}
          >
            {logs.length > 0 ? formatTime(elapsed) : "00:00:00"}
          </div>

          {/* Dynamic Safety Message */}
          <div className="mt-6 flex h-8 items-center gap-2">
            {logs.length > 0 && isDangerZone && (
              <div className="flex animate-pulse items-center gap-2 rounded-full bg-red-100 px-4 py-1 text-xs font-bold tracking-widest text-red-600 uppercase">
                <AlertTriangle className="h-3 w-3" />
                Wait Zone ({45 - minutesPassed}m remaining)
              </div>
            )}
            {logs.length > 0 && !isDangerZone && (
              <div className="flex items-center gap-2 rounded-full bg-green-100 px-4 py-1 text-xs font-bold tracking-widest text-green-700 uppercase">
                <Clock className="h-3 w-3" />
                Interval Clear
              </div>
            )}
            {logs.length === 0 && (
              <div className="text-xs font-bold tracking-widest text-neutral-300 uppercase">
                Ready to Start
              </div>
            )}
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={handleLogDose}
          className="group relative mb-16 w-full overflow-hidden bg-black py-6 text-white transition-transform active:scale-[0.99]"
        >
          <span className="relative z-10 flex items-center justify-center gap-3 font-sans text-xl font-bold tracking-widest uppercase">
            {logs.length === 0 ? "Start Session" : "Log Dose"}
            <History className="h-5 w-5" />
          </span>
        </button>

        {/* History Log */}
        {logs.length > 0 && (
          <div className="rounded-lg bg-neutral-50 p-8">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="font-sans text-xs font-bold tracking-widest text-neutral-500 uppercase">
                Session History
              </h3>
              <button
                onClick={handleReset}
                className="flex items-center gap-1 text-[10px] font-bold tracking-widest text-neutral-400 uppercase hover:text-red-600"
              >
                <RotateCcw className="h-3 w-3" />
                Reset
              </button>
            </div>

            <div className="space-y-4">
              {logs.map((timestamp, index) => {
                const date = new Date(timestamp);
                const isFirst = index === logs.length - 1;

                // Calculate gap from previous (which is actually the next item in the array due to reverse sort)
                let gap: string | null = null;
                if (index < logs.length - 1) {
                  const prevTimestamp = logs[index + 1];
                  const diff = Math.floor((timestamp - prevTimestamp) / 60000);
                  gap = `${diff}m interval`;
                }

                return (
                  <div
                    key={timestamp}
                    className="flex items-center justify-between border-b border-neutral-200 pb-3 last:border-0"
                  >
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-sm text-neutral-400">
                        #{logs.length - index}
                      </span>
                      <span className="font-sans text-lg font-bold text-black">
                        {date.toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    </div>

                    {gap ? (
                      <span
                        className={cn(
                          "text-xs font-bold tracking-widest uppercase",
                          parseInt(gap) < 45
                            ? "text-red-600"
                            : "text-green-600",
                        )}
                      >
                        {gap}
                      </span>
                    ) : (
                      <span className="text-xs font-bold tracking-widest text-neutral-400 uppercase">
                        Session Start
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
