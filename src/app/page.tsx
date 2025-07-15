"use client";
import Silk from "../../ReactBits/Silk/Silk";
import Wrapper from "./Components/Wrapper";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import GlareHover from "../../ReactBits/GlareHover/GlareHover";
import Societies from "./Components/Societies";
import eventsData from './Events.json';
import Link from "next/link";
import { BlurFade } from "@/components/magicui/blur-fade";
import EventCard from "./Components/EventCard";

const upcomingEvents = eventsData.events.filter(event => event.upcomingEvent === true);

export default function Home() {
  const handleRegisterClick = (e: React.MouseEvent, url?: string) => {
    e.stopPropagation();
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  const handleCardClick = (url?: string) => {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <>
    <BlurFade delay={0.25} inView>
    <Wrapper curIndex={0}>
        <div className="w-full bg-white h-full relative z-10">
            {/* Hero Section - Silk component unchanged */}
            <div className="flex w-full h-screen justify-center flex-col items-center">
                <div className="absolute w-full flex h-full justify-center flex-col items-center">
                  <h1 className="text-center tracking-[-2px] sm:tracking-[-3px] lg:tracking-[-4px] z-10 font-jetbrains-mono font-extrabold text-[rgb(219,219,219)] text-[5vw] sm:text-[4vw] lg:text-[3vw] leading-tight px-4">
                    Chinmaya Vishwa Vidyapeeth <br/>IEEE Student Branch
                  </h1>
                </div>
                <Silk/>
            </div>
              
            {/* Events Section - Mobile responsive */}
            <div className="w-full flex justify-center flex-col gap-5 items-start p-4 sm:p-8 md:p-12 lg:p-20 h-auto bg-black">
                <div className="flex w-full justify-between items-center flex-col sm:flex-row gap-4 sm:gap-0">
                  <TypingAnimation 
                    startOnView 
                    duration={60} 
                    className="text-white font-jetbrains-mono text-3xl mt-10 mb-2 sm:m-0 sm:text-2xl lg:text-3xl text-center sm:text-start tracking-tighter"
                  >
                    Upcoming Events
                  </TypingAnimation>
                  <Link href={"/Events"}>
                    <GlareHover 
                      className="text-white font-jetbrains-mono tracking-tighter px-2 text-sm sm:text-md" 
                      width="120px" 
                      height="50px"
                    >
                      Show All
                    </GlareHover>
                  </Link>
                </div>
                
                {/* Events Grid */}
                <div className="w-full mt-4 sm:mt-6 lg:mt-8">
                  {upcomingEvents.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                      {upcomingEvents.map((event, index) => (
                        <BlurFade key={index} delay={0.1 * index} inView>
                          <EventCard
                            event={event}
                            onRegisterClick={handleRegisterClick}
                            onCardClick={handleCardClick}
                          />
                        </BlurFade>
                      ))}
                    </div>
                  ) : (
                    <div className="flex items-center justify-center h-32 sm:h-48 lg:h-64">
                      <p className="text-white text-lg sm:text-xl font-jetbrains-mono opacity-60 text-center px-4">
                        No upcoming events found
                      </p>
                    </div>
                  )}
                </div>
              </div>
              <Societies/>
            </div>
    </Wrapper>
    </BlurFade>
    </>
  );
}