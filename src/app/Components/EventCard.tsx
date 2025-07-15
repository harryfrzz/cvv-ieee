"use client";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface EventCardProps {
  event: {
    image: string;
    title: string;
    time?: string;
    date?: string;
    location?: string;
    upcomingEvent?: boolean;
    url?: string;
  };
  onRegisterClick?: (e: React.MouseEvent, url?: string) => void;
  onCardClick?: (url?: string) => void;
}

export default function EventCard({ event, onRegisterClick, onCardClick }: EventCardProps) {
  return (
    <div 
      className="group relative rounded-2xl p-4 sm:p-6 border border-[rgb(32,32,32)] hover:border-[rgb(54,54,54)] transition-all duration-300 hover:scale-105 cursor-pointer"
      onClick={() => onCardClick?.(event.url)}
    >
      {/* Spotlight Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Event Image */}
      <div className="relative w-full aspect-square mb-4 overflow-hidden rounded-xl">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      
      {/* Event Info */}
      <div className="relative z-10">
        <h3 className="text-white text-base sm:text-lg font-jetbrains-mono font-semibold mb-2 tracking-tight line-clamp-2">
          {event.title}
        </h3>
        
        {/* Date and Time */}
        <div className="flex justify-between items-center mb-2">
          {event.date && (
            <span className="text-gray-300 text-xs sm:text-sm font-jetbrains-mono">
              {event.date}
            </span>
          )}
          {event.time && (
            <span className="text-gray-300 text-xs sm:text-sm font-jetbrains-mono">
              {event.time}
            </span>
          )}
        </div>
        
        {/* Location */}
        {event.location && (
          <p className="text-gray-400 text-xs sm:text-sm font-jetbrains-mono mb-4 opacity-80">
            📍 {event.location}
          </p>
        )}
        
        {/* Register Button - Only for upcoming events */}
        {event.upcomingEvent && (
          <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-0 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-gradient-to-r from-blue-500/50 to-purple-500/40 text-white px-4 sm:px-5 py-2 sm:py-2 rounded-full text-sm sm:text-xs font-jetbrains-mono w-fit">
              Upcoming
            </div>
            <div 
              className="group relative flex items-center rounded-full px-4 sm:px-4 py-2 sm:py-1.5 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f] cursor-pointer w-fit"
              onClick={(e) => onRegisterClick?.(e, event.url)}
            >
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
              
              <AnimatedGradientText className="text-sm sm:text-sm font-jetbrains-mono tracking-tighter">
                Register Now
              </AnimatedGradientText>
            </div>
          </div>
        )}
        
        {/* Past Event Label */}
        {!event.upcomingEvent && (
          <div className="flex justify-end opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-gray-400 text-sm sm:text-sm font-jetbrains-mono px-4 sm:px-4 py-2 sm:py-1.5 border border-gray-600 rounded-full">
              Past Event
            </span>
          </div>
        )}
      </div>
    </div>
  );
}