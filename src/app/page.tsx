import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import Silk from "../../ReactBits/Silk/Silk";
import Features from "./Components/Features";
import Wrapper from "./Components/Wrapper";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ChromaGrid from "../../ReactBits/ChromaGrid/ChromaGrid";

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
                  <div className="absolute bottom-80 z-10 flex hidden flex-col items-center">
                    <h1 className=" text-center tracking-[-3] z-10 font-jetbrains-mono font-extrabold text-[rgb(219,219,219)] text-[1vw]">Scroll down</h1>
                    <KeyboardArrowDownIcon sx={{fontSize : "22px",color: "rgb(219,219,219)"}}/>
                  </div>
                </div>
                <Silk/>
            </div>
              <div className="w-full flex justify-center flex-col gap-10 items-center h-auto p-20 bg-black">
                <h1 className="text-white font-jetbrains-mono text-3xl">Events</h1>
                  <ChromaGrid 
                      items={items}
                      radius={100}
                      damping={0.45}
                      fadeOut={0.6}
                      ease="power3.out"
                    />
              </div>
              <Features/>
            </div>
    </Wrapper>
    </>
  );
}
