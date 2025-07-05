import Wrapper from "./Components/Wrapper";

export default function Home() {
  return (
    <>
    <Wrapper>
        <div className="flex w-full h-screen">
            <div className="w-full bg-white h-screen">
              <div className="flex w-full h-screen justify-center items-center">
                 <h1 className="font-bold text-6xl text-[#604D53]">Chinmaya Vishwa Vidyapeeth <br/> IEEE Student Branch</h1>
              </div>
            </div>
        </div>

        <div className="w-full bg-blue-100 h-[500px]"></div>
        <div className="w-full bg-blue-200 h-[800px]"></div>
        <div className="w-full bg-blue-300 h-[600px]"></div>
        
    </Wrapper>
    </>
  );
}
