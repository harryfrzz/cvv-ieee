import Navbar from "./Components/Navbar";

export default function Home() {
  return (
    <>
      <div className="fixed top-2 w-full">
        <Navbar/>
      </div>

      <div className="flex w-full h-screen">
          <div className="w-full bg-blue-100 h-[5000px]"></div>
          <div className="w-full h-[5000px]"></div>
      </div>
    </>
  );
}
