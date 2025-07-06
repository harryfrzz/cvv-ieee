import Silk from "../../ReactBits/Silk/Silk";
import Wrapper from "./Components/Wrapper";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function Home() {
  return (
    <>
    <Wrapper>
        <div className="w-full bg-white h-full relative z-10">
            <div className="flex w-full h-screen justify-center flex-col items-center">
                <div className="absolute w-full flex h-full justify-center flex-col items-center">
                  <h1 className=" text-center tracking-[-4] z-10 font-jetbrains-mono font-extrabold text-[rgb(219,219,219)] text-[3vw]">Chinmaya Vishwa Vidyapeeth <br/>IEEE Student Branch</h1>
                  <div className="absolute bottom-70 z-10 flex flex-col items-center">
                    <h1 className=" text-center tracking-[-4] z-10 font-jetbrains-mono font-extrabold text-[rgb(219,219,219)] text-[1vw]">Scroll down</h1>
                    <KeyboardArrowDownIcon sx={{fontSize : "25px",color: "#ffff"}}/>
                  </div>
                </div>
                <Silk/>
              </div>

              <div className="flex w-full h-[500px] bg-gray-700">

              </div>
            </div>
    </Wrapper>
    </>
  );
}
