import Silk from "../../ReactBits/Silk/Silk";
import Wrapper from "./Components/Wrapper";
import ChromaGrid from "../../ReactBits/ChromaGrid/ChromaGrid";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import GlareHover from "../../ReactBits/GlareHover/GlareHover";
import Societies from "./Components/Societies";
import eventsData from './Events.json';
import Link from "next/link";

const upcomingEvents = eventsData.events.filter(event => event.upcomingEvent === true);

export default function Home() {
  return (
    <>
    <Wrapper curIndex={0}>
        <div className="w-full bg-white h-full relative z-10">
            <div className="flex w-full h-screen justify-center flex-col items-center">
                <div className="absolute w-full flex h-full justify-center flex-col items-center">
                  <h1 className=" text-center tracking-[-4] z-10 font-jetbrains-mono font-extrabold text-[rgb(219,219,219)] text-[3vw]">Chinmaya Vishwa Vidyapeeth <br/>IEEE Student Branch</h1>
                  {/*<div className="absolute bottom-125 z-10 flex flex-col items-center">
                    <TypingAnimation duration={50} startOnView className="font-jetbrains-mono text-[rgb(219,219,219)] tracking-[-2] z-10 text-md">
                      Scroll down
                    </TypingAnimation>
                    <KeyboardArrowDownIcon sx={{fontSize : "22px",color: "rgb(219,219,219)"}}/>
                  </div>*/}
                </div>
                <Silk/>
            </div>
              <div className="w-full flex justify-center flex-col gap-15 items-start p-20 h-auto bg-black">
                <div className="flex w-full justify-between items-center">
                  <TypingAnimation startOnView duration={60} className="text-white font-jetbrains-mono text-3xl text-start tracking-tighter">Upcoming Events</TypingAnimation>
                  <Link href={"/Events"}>
                  <GlareHover className="text-white font-jetbrains-mono tracking-tighter px-2 text-md" width="120px" height="50px">
                  Show All
                  </GlareHover>
                  </Link>
                </div>
                  <ChromaGrid 
                      items={upcomingEvents}
                      radius={100}
                      damping={0.45}
                      fadeOut={0.6}
                      ease="power3.out"
                    />
              </div>
              <Societies/>
            </div>
    </Wrapper>
    </>
  );
}