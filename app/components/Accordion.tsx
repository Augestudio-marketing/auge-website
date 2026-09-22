"use client";

import { useState, type ReactNode } from "react";

export type AccordionItem = {
  id: string;
  header: ReactNode;
  content: ReactNode;
};

export default function Accordion({
  items,
  defaultOpen = 0,
  theme = "light",
}: {
  items: AccordionItem[];
  defaultOpen?: number | null;
  theme?: "light" | "dark";
}) {
  const [openId, setOpenId] = useState<string | null>(
    defaultOpen !== null ? items[defaultOpen]?.id ?? null : null
  );

  const borderClass = theme === "dark" ? "border-cream/15" : "border-stone/15";
  const textClass = theme === "dark" ? "text-cream" : "text-stone";
  const iconClass = theme === "dark" ? "text-cream/60" : "text-stone/50";

  return (
    <div className={`divide-y border-t border-b ${borderClass}`}>
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div key={item.id} className={borderClass}>
            <button
              type="button"
              onClick={() => setOpenId(isOpen ? null : item.id)}
              className={`flex w-full items-center justify-between gap-6 py-6 text-left ${textClass}`}
            >
              <span className="font-display text-xl sm:text-2xl">
                {item.header}
              </span>
              <span
                className={`shrink-0 text-2xl leading-none transition-transform ${iconClass}`}
                style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
              >
                +
              </span>
            </button>
            {isOpen && <div className="pb-8">{item.content}</div>}
          </div>
        );
      })}
    </div>
  );
}
