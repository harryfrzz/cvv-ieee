import Silk from "../../ReactBits/Silk/Silk";
import Wrapper from "./Components/Wrapper";

export default function Home() {
  return (
    <>
    <Wrapper>
            <div className="w-full bg-white h-screen relative z-10">
              <div className="flex w-full h-screen justify-center items-center">
                <h1 className="absolute left-10 z-10 text-white text-[2.8vw]">Chinmaya Vishwa Vidyapeeth <br/>IEEE Student Branch</h1>
                <Silk/>
              </div>
            </div>
    </Wrapper>
    </>
  );
}
