"use client";
import { useState, useMemo } from "react";
import { BlurFade } from "@/components/magicui/blur-fade";
import Wrapper from "../Components/Wrapper";
import eventsData from '../Events.json';
import EventCard from "../Components/EventCard";

type FilterType = 'all' | 'upcoming' | 'past';

export default function Events(){
    const [filter, setFilter] = useState<FilterType>('all');

    const filteredEvents = useMemo(() => {
        return eventsData.events.filter(event => {
            if (filter === 'all') return true;
            if (filter === 'upcoming') return event.upcomingEvent === true;
            if (filter === 'past') return event.upcomingEvent === false;
            return true;
        });
    }, [filter]);

    const upcomingCount = eventsData.events.filter(event => event.upcomingEvent === true).length;
    const pastCount = eventsData.events.filter(event => event.upcomingEvent === false).length;

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

    return(
        <BlurFade delay={0.25} inView>
            <Wrapper curIndex={1}>
                <div className="w-full flex flex-col p-20">
                    {/* Title - First to appear */}
                    <BlurFade delay={0.4} inView>
                        <div className="flex w-full h-20 justify-between items-center mt-5">
                            <h1 className="text-white text-4xl font-jetbrains-mono tracking-tighter">Events</h1>
                        </div>
                    </BlurFade>
                    
                    {/* Filter Buttons - Second to appear */}
                    <BlurFade delay={0.6} inView>
                        <div className="flex gap-4 mb-8">
                            <button
                                onClick={() => setFilter('all')}
                                className={`px-6 py-2 rounded-full font-jetbrains-mono text-sm transition-all duration-300 ${
                                    filter === 'all' 
                                        ? 'bg-white text-black font-medium' 
                                        : 'bg-transparent text-white border border-white hover:bg-white hover:text-black'
                                }`}
                            >
                                All Events ({eventsData.events.length})
                            </button>
                            <button
                                onClick={() => setFilter('upcoming')}
                                className={`px-6 py-2 rounded-full font-jetbrains-mono text-sm transition-all duration-300 ${
                                    filter === 'upcoming' 
                                        ? 'bg-white text-black font-medium' 
                                        : 'bg-transparent text-white border border-white hover:bg-white hover:text-black'
                                }`}
                            >
                                Upcoming ({upcomingCount})
                            </button>
                            <button
                                onClick={() => setFilter('past')}
                                className={`px-6 py-2 rounded-full font-jetbrains-mono text-sm transition-all duration-300 ${
                                    filter === 'past' 
                                        ? 'bg-white text-black font-medium' 
                                        : 'bg-transparent text-white border border-white hover:bg-white hover:text-black'
                                }`}
                            >
                                Past ({pastCount})
                            </button>
                        </div>
                    </BlurFade>

                    {/* Events Grid - Third to appear with individual blur for each event */}
                    <BlurFade delay={0.8} inView>
                        <div className="w-full min-h-screen">
                            {filteredEvents.length > 0 ? (
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                                    {filteredEvents.map((event, index) => (
                                        <BlurFade key={index} delay={0.9 + (0.1 * index)} inView>
                                            <EventCard
                                                event={event}
                                                onRegisterClick={handleRegisterClick}
                                                onCardClick={handleCardClick}
                                            />
                                        </BlurFade>
                                    ))}
                                </div>
                            ) : (
                                <div className="flex items-center justify-center h-64">
                                    <p className="text-white text-xl font-jetbrains-mono opacity-60">
                                        No {filter === 'all' ? '' : filter} events found
                                    </p>
                                </div>
                            )}
                        </div>
                    </BlurFade>
                </div>
            </Wrapper>
        </BlurFade>
    )
}