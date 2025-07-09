"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { cn } from "@/lib/utils";

export interface ChromaItem {
  image: string;
  title: string;
  time?: string;
  date?: string;
  handle?: string;
  location?: string;
  borderColor?: string;
  gradient?: string;
  url?: string;
  upcomingEvent?: boolean;
}

export interface ChromaGridProps {
  items?: ChromaItem[];
  className?: string;
  radius?: number;
  damping?: number;
  fadeOut?: number;
  ease?: string;
}

type SetterFn = (v: number | string) => void;

const ChromaGrid: React.FC<ChromaGridProps> = ({
  items,
  className = "",
  radius = 200,
  damping = 0.45,
  fadeOut = 0.6,
  ease = "power3.out",
}) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const fadeRef = useRef<HTMLDivElement>(null);
  const setX = useRef<SetterFn | null>(null);
  const setY = useRef<SetterFn | null>(null);
  const pos = useRef({ x: 0, y: 0 });

  const demo: ChromaItem[] = [
    {
      image: "https://i.pravatar.cc/300?img=8",
      title: "Tech Workshop",
      time: "2:00 PM - 4:00 PM",
      date: "29/07/2025",
      upcomingEvent: false,
      location: "Main Auditorium",
      borderColor: "#4F46E5",
      gradient: "linear-gradient(145deg,#4F46E5,#000)",
      url: "https://github.com/",
    },
    {
      image: "https://i.pravatar.cc/300?img=11",
      title: "AI Conference - Deep Learning and Neural Networks Symposium",
      time: "10:00 AM - 6:00 PM",
      date: "15/08/2025",
      location: "Conference Hall",
      borderColor: "#10B981",
      gradient: "linear-gradient(210deg,#10B981,#000)",
      url: "https://linkedin.com/in/",
    },
    {
      image: "https://i.pravatar.cc/300?img=3",
      title: "Coding Bootcamp",
      time: "9:00 AM - 5:00 PM",
      date: "22/08/2025",
      upcomingEvent: false,
      location: "Lab 101",
      borderColor: "#F59E0B",
      gradient: "linear-gradient(165deg,#F59E0B,#000)",
      url: "https://dribbble.com/",
    },
    {
      image: "https://i.pravatar.cc/300?img=16",
      title: "Hackathon 2025 - Innovation Challenge for Students",
      time: "All Day",
      date: "05/09/2025",
      location: "Innovation Center",
      borderColor: "#EF4444",
      gradient: "linear-gradient(195deg,#EF4444,#000)",
      url: "https://kaggle.com/",
    },
    {
      image: "https://i.pravatar.cc/300?img=25",
      title: "Networking Event",
      time: "6:00 PM - 9:00 PM",
      date: "12/09/2025",
      handle: "@networking",
      location: "Student Center",
      borderColor: "#8B5CF6",
      gradient: "linear-gradient(225deg,#8B5CF6,#000)",
      url: "https://github.com/",
    },
    {
      image: "https://i.pravatar.cc/300?img=60",
      title: "Industry Talk",
      time: "3:00 PM - 5:00 PM",
      date: "20/09/2025",
      location: "Lecture Hall A",
      borderColor: "#06B6D4",
      gradient: "linear-gradient(135deg,#06B6D4,#000)",
      url: "https://aws.amazon.com/",
    },
  ];

  const data = items?.length ? items : demo;

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    setX.current = gsap.quickSetter(el, "--x", "px") as SetterFn;
    setY.current = gsap.quickSetter(el, "--y", "px") as SetterFn;
    const { width, height } = el.getBoundingClientRect();
    pos.current = { x: width / 2, y: height / 2 };
    setX.current(pos.current.x);
    setY.current(pos.current.y);
  }, []);

  const moveTo = (x: number, y: number) => {
    gsap.to(pos.current, {
      x,
      y,
      duration: damping,
      ease,
      onUpdate: () => {
        setX.current?.(pos.current.x);
        setY.current?.(pos.current.y);
      },
      overwrite: true,
    });
  };

  const handleMove = (e: React.PointerEvent) => {
    const r = rootRef.current!.getBoundingClientRect();
    moveTo(e.clientX - r.left, e.clientY - r.top);
    gsap.to(fadeRef.current, { opacity: 0, duration: 0.25, overwrite: true });
  };

  const handleLeave = () => {
    gsap.to(fadeRef.current, {
      opacity: 1,
      duration: fadeOut,
      overwrite: true,
    });
  };

  const handleCardClick = (url?: string) => {
    if (url) window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleCardMove: React.MouseEventHandler<HTMLElement> = (e) => {
    const c = e.currentTarget as HTMLElement;
    const rect = c.getBoundingClientRect();
    c.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    c.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={rootRef}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      className={`relative w-full h-full grid grid-cols-[repeat(auto-fit,320px)] justify-center gap-8 ${className}`}
      style={
        {
          "--r": `${radius}px`,
          "--x": "50%",
          "--y": "50%",
        } as React.CSSProperties
      }
    >
      {data.map((c, i) => (
        <article
          key={i}
          onMouseMove={handleCardMove}
          onClick={() => handleCardClick(c.url)}
          className="group relative flex flex-col w-[320px] h-[400px] rounded-[20px] overflow-hidden border-transparent transition-colors duration-300 cursor-pointer"
          style={
            {
              "--card-border": c.borderColor || "transparent",
              background: c.gradient,
              "--spotlight-color": "rgba(255,255,255,0.3)",
            } as React.CSSProperties
          }
        >
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-500 z-20 opacity-0 group-hover:opacity-100"
            style={{
              background:
                "radial-gradient(circle at var(--mouse-x) var(--mouse-y), var(--spotlight-color), transparent 70%)",
            }}
          />
          {(c.upcomingEvent === true || c.handle) && (
                <div className="flex-shrink-0 ml-auto absolute bottom-4 z-20 right-4">
                  {c.upcomingEvent === true ? (
                    <div className="group relative mx-auto flex items-center justify-center rounded-full px-4 py-1.5 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f] ">
                      <span
                        className={cn(
                          "absolute inset-0 block h-full w-full animate-gradient rounded-[inherit] bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:300%_100%] p-[1px]",
                        )}
                        style={{
                          WebkitMask:
                            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                          WebkitMaskComposite: "destination-out",
                          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                          maskComposite: "subtract",
                          WebkitClipPath: "padding-box",
                        }}
                      />
                      <AnimatedGradientText className="text-sm font-medium">
                        Upcoming
                      </AnimatedGradientText>
                    </div>
                  ) : (
                    c.handle && (
                      <span className="text-[0.85rem] border border-white px-2 py-1 rounded-2xl opacity-80 whitespace-nowrap">
                        {c.handle}
                      </span>
                    )
                  )}
                </div>
              )}
          <div className="relative z-10 flex-1 p-[10px] box-border">
            <img
              src={c.image}
              alt={c.title}
              loading="lazy"
              className="w-full h-[250px] object-cover rounded-[10px]"
            />
          </div>
          
          {/* Title and Status Section */}
          <div className="relative z-10 px-3 pt-3 h-full justify-start">
            <div className="flex items-start">
              <h3 className="m-0 text-[1.05rem] font-jetbrains-mono tracking-tighter text-white leading-tight whitespace-nowrap overflow-hidden text-ellipsis min-w-0 flex-1">
                {c.title}
              </h3>
            </div>
          </div>

          {/* Time and Date Section */}
          {(c.date || c.time) && (
            <div className="relative flex flex-col justify-start h-full z-10 px-3 pb-3 -mt-10">
              <div className="flex justify-between items-center text-white opacity-85">
                {c.date && (
                  <span className="text-[0.85rem] whitespace-nowrap overflow-hidden text-ellipsis max-w-[45%]">{c.date}</span>
                )}
                {c.time && (
                  <span className="text-[0.85rem] whitespace-nowrap overflow-hidden text-ellipsis max-w-[45%]">{c.time}</span>
                )}
              </div>
              {c.location && (
                <div className="mt-2">
                  <span className="text-[0.85rem] text-white opacity-85 whitespace-nowrap overflow-hidden text-ellipsis block">
                    📍 {c.location}
                  </span>
                </div>
              )}
            </div>
          )}
        </article>
      ))}
    </div>
  );
};

export default ChromaGrid;