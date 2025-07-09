import Silk from "../../ReactBits/Silk/Silk";
import Wrapper from "./Components/Wrapper";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ChromaGrid from "../../ReactBits/ChromaGrid/ChromaGrid";
import { TypingAnimation } from "@/components/magicui/typing-animation";

const items = [
  {
      image: "https://i.pravatar.cc/300?img=8",
      title: "Tech Workshop",
      time: "2:00 PM - 4:00 PM",
      date: "29/07/2025",
      upcomingEvent: true,
      location: "Main Auditorium",
      borderColor: "#4F46E5",
      gradient: "linear-gradient(145deg, rgb(110,110,110), #000)",
      url: "https://github.com/",
    },
    {
      image: "https://i.pravatar.cc/300?img=11",
      title: "AI Conference hello mwine heyeyydfdsfsdfsdfdsfdsdsfsadsaasdd",
      time: "10:00 AM - 6:00 PM",
      date: "15/08/2025",
      upcomingEvent: false,
      location: "Conference Hall",
      borderColor: "#10B981",
      gradient: "linear-gradient(210deg, rgb(120,120,120), #000)",
      url: "https://linkedin.com/in/",
    },
    {
      image: "https://i.pravatar.cc/300?img=3",
      title: "Coding Bootcamp",
      time: "9:00 AM - 5:00 PM",
      date: "22/08/2025",
      upcomingEvent: true,
      location: "Lab 101",
      borderColor: "#F59E0B",
      gradient: "linear-gradient(165deg, rgb(100,100,100), #000)",
      url: "https://dribbble.com/",
    },
    {
      image: "https://i.pravatar.cc/300?img=16",
      title: "Hackathon 2025",
      time: "All Day",
      date: "05/09/2025",
      upcomingEvent: true,
      location: "Innovation Center",
      borderColor: "#EF4444",
      gradient: "linear-gradient(195deg, rgb(130,130,130), #000)",
      url: "https://kaggle.com/",
    },
    {
      image: "https://i.pravatar.cc/300?img=25",
      title: "Networking Event",
      time: "6:00 PM - 9:00 PM",
      date: "12/09/2025",
      upcomingEvent: false,
      location: "Student Center",
      borderColor: "#8B5CF6",
      gradient: "linear-gradient(225deg, rgb(90,90,90), #000)",
      url: "https://github.com/",
    },
    {
      image: "https://i.pravatar.cc/300?img=60",
      title: "Industry Talk",
      time: "3:00 PM - 5:00 PM",
      date: "20/09/2025",
      upcomingEvent: true,
      location: "Lecture Hall A",
      borderColor: "#06B6D4",
      gradient: "linear-gradient(135deg, rgb(140,140,140), #000)",
      url: "https://aws.amazon.com/",
    },
];

export default function Home() {
  return (
    <>
    <Wrapper>
        <div className="w-full bg-white h-full relative z-10">
            <div className="flex w-full h-screen justify-center flex-col items-center">
                <div className="absolute w-full flex h-full justify-center flex-col items-center">
                  <h1 className=" text-center tracking-[-4] z-10 font-jetbrains-mono font-extrabold text-[rgb(219,219,219)] text-[3vw]">Chinmaya Vishwa Vidyapeeth <br/>IEEE Student Branch</h1>
                  <div className="absolute bottom-135 z-10 flex flex-col items-center">
                    <TypingAnimation duration={50} startOnView className="font-jetbrains-mono text-[rgb(219,219,219)] tracking-[-2] z-10 text-md">
                      Scroll down
                    </TypingAnimation>
                    <KeyboardArrowDownIcon sx={{fontSize : "22px",color: "rgb(219,219,219)"}}/>
                  </div>
                </div>
                <Silk/>
            </div>
              <div className="w-full flex justify-center flex-col gap-15 items-start p-20 h-auto bg-black">
                <div className="flex w-full justify-between items-center">
                  <h1 className="text-white font-jetbrains-mono text-3xl text-start">Events</h1>
                  <div className="flex w-auto h-10 p-2 bg-black border border-white text-white justify-center items-center font-jetbrains-mono">
                   Show all
                  </div>
                </div>
                  <ChromaGrid 
                      items={items}
                      radius={100}
                      damping={0.45}
                      fadeOut={0.6}
                      ease="power3.out"
                    />
              </div>
            </div>
    </Wrapper>
    </>
  );
}
