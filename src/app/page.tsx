import Silk from "../../ReactBits/Silk/Silk";
import Features from "./Components/Features";
import Wrapper from "./Components/Wrapper";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ChromaGrid from "../../ReactBits/ChromaGrid/ChromaGrid";
import Footer from "./Components/Footer";
import { TypingAnimation } from "@/components/magicui/typing-animation";

const items = [
  {
    image: "https://i.pravatar.cc/300?img=1",
    title: "Sarah Johnson",
    subtitle: "Frontend Developer",
    handle: "@sarahjohnson",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, rgba(255,255,255,0.4), rgba(0,0,0,0.9))",
    url: "https://github.com/sarahjohnson"
  },
  {
    image: "https://i.pravatar.cc/300?img=2",
    title: "Mike Chen",
    subtitle: "Backend Engineer",
    handle: "@mikechen",
    borderColor: "#10B981",
    gradient: "linear-gradient(100deg, rgba(255,255,255,0.4), rgba(0,0,0,0.9))",
    url: "https://linkedin.com/in/mikechen"
  },
  {
    image: "https://i.pravatar.cc/300?img=2",
    title: "Mike Chen",
    subtitle: "Backend Engineer",
    handle: "@mikechen",
    borderColor: "#10B981",
    gradient: "linear-gradient(185deg, rgba(255,255,255,0.4), rgba(0,0,0,0.9))",
    url: "https://linkedin.com/in/mikechen"
  },
   {
    image: "https://i.pravatar.cc/300?img=1",
    title: "Sarah Johnson",
    subtitle: "Frontend Developer",
    handle: "@sarahjohnson",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, rgba(255,255,255,0.4), rgba(0,0,0,0.9))",
    url: "https://github.com/sarahjohnson"
  },
   {
    image: "https://i.pravatar.cc/300?img=1",
    title: "Sarah Johnson",
    subtitle: "Frontend Developer",
    handle: "@sarahjohnson",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, rgba(255,255,255,0.4), rgba(0,0,0,0.9))",
    url: "https://github.com/sarahjohnson"
  },
   {
    image: "https://i.pravatar.cc/300?img=1",
    title: "Sarah Johnson",
    subtitle: "Frontend Developer",
    handle: "@sarahjohnson",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, rgba(255,255,255,0.4), rgba(0,0,0,0.9))",
    url: "https://github.com/sarahjohnson"
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
                  <div className="absolute bottom-170 z-10 flex flex-col items-center">
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
              <Footer/>
            </div>
    </Wrapper>
    </>
  );
}
