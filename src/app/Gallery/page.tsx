import Wrapper from "../Components/Wrapper";

export default function Gallery(){
    return(
        <Wrapper curIndex={3}>
            <div className="w-full h-screen flex justify-center items-center p-15">
                <h1 className="text-white font-jetbrains-mono tracking-tighter">This website is currently under development. This page is not available at the moment.</h1>
            </div>
        </Wrapper>
    )
}