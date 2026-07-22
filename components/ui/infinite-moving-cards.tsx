"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";

export interface MovingCardItem {
  icon?: React.ComponentType<{ className?: string }>;
  title?: string;
  description?: string;
  badge?: string;
  color?: string;
  quote?: string;
  name?: string;
}

export type FeatureCardItem = MovingCardItem;

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  className,
}: {
  items: MovingCardItem[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "25s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "45s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "75s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-full max-w-7xl mx-auto overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-6 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => {
          const IconComp = item.icon;
          return (
            <li
              className="relative w-[340px] max-w-full shrink-0 rounded-3xl md:w-[400px] flex flex-col justify-between"
              key={(item.title || item.name || '') + idx}
            >
              <CardContainer className="w-full h-full">
                <CardBody className="w-full h-full border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/80 p-6 backdrop-blur-xl rounded-3xl shadow-xl hover:shadow-2xl hover:border-blue-500/50 transition-all group/card flex flex-col justify-between">
                  {item.quote ? (
                    <blockquote>
                      <CardItem translateZ="40" className="relative z-20 text-sm leading-[1.6] font-normal text-slate-700 dark:text-gray-200">
                        {item.quote}
                      </CardItem>
                      <CardItem translateZ="30" className="relative z-20 mt-6 flex flex-row items-center">
                        <span className="flex flex-col gap-1">
                          <span className="text-sm font-bold text-slate-900 dark:text-white">
                            {item.name}
                          </span>
                          <span className="text-xs text-slate-500 dark:text-gray-400">
                            {item.title}
                          </span>
                        </span>
                      </CardItem>
                    </blockquote>
                  ) : (
                    <div>
                      <div className="flex items-center justify-between mb-5">
                        {IconComp && (
                          <CardItem translateZ="50">
                            <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover/card:scale-110 transition-transform shadow-inner">
                              <IconComp className="w-6 h-6" />
                            </div>
                          </CardItem>
                        )}
                        {item.badge && (
                          <CardItem translateZ="30">
                            <span
                              className={`text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full border bg-gradient-to-r ${item.color}`}
                            >
                              {item.badge}
                            </span>
                          </CardItem>
                        )}
                      </div>

                      <CardItem translateZ="40" className="font-bricolage text-xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight">
                        {item.title}
                      </CardItem>
                      <CardItem translateZ="20" className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                        {item.description}
                      </CardItem>

                      <CardItem translateZ="30" className="pt-4 border-t border-slate-100 dark:border-slate-800/60 flex items-center gap-2 text-xs font-medium text-blue-600 dark:text-blue-400">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        <span>Production Grade Ready</span>
                      </CardItem>
                    </div>
                  )}
                </CardBody>
              </CardContainer>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
