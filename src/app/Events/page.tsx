"use client";
import { useState, useMemo } from "react";
import ChromaGrid from "../../../ReactBits/ChromaGrid/ChromaGrid";
import Wrapper from "../Components/Wrapper";
import eventsData from '../Events.json';

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

    return(
        <Wrapper curIndex={1}>
            <div className="w-full flex flex-col p-20">
                <div className="flex w-full h-20 justify-between items-center mt-8">
                    <h1 className="text-white text-4xl font-jetbrains-mono tracking-tighter">Events</h1>
                </div>
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

                {/* Events Grid */}
                <div className="w-full min-h-screen">
                    {filteredEvents.length > 0 ? (
                        <ChromaGrid 
                            items={filteredEvents}
                            radius={100}
                            damping={0.45}
                            fadeOut={0.6}
                            className="mt-5"
                            ease="power3.out"
                        />
                    ) : (
                        <div className="flex items-center justify-center h-64">
                            <p className="text-white text-xl font-jetbrains-mono opacity-60">
                                No {filter === 'all' ? '' : filter} events found
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </Wrapper>
    )
}