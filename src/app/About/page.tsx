import Wrapper from "../Components/Wrapper";

export default function About(){
    return(
        <Wrapper curIndex={4}>
            <div className="w-full h-screen flex flex-col p-20">
                <div className="flex w-full h-20 justify-between items-center mt-8">
                    <h1 className="text-white text-4xl font-jetbrains-mono tracking-tighter">About Us</h1>
                    
                </div>
                <p className="text-white font-jetbrains-mono tracking-tighter">The IEEE Student Branch of Chinmaya Vishwa Vidyapeeth Deemed to be University was established on 31st December 2023.<br/>
                        The Student Branch currently consist of students from the Artificial Intelligence and Computer Science Departments of the CVV Institute of Science and Technology (CVV-IST). 
                        There are several upcoming events and competitions.</p>
            </div>
        </Wrapper>
    )
}