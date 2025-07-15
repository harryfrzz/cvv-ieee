import { BlurFade } from "@/components/magicui/blur-fade";
import Wrapper from "../Components/Wrapper";
import Image from "next/image";
import execomData from '../Execom.json';

interface ExecomMember {
  id: number;
  name: string;
  position: string;
  image: string;
  email?: string;
  linkedin?: string;
}

interface ExecomData {
  execomMembers: {
    coreCommittee: ExecomMember[];
    oceanicSociety: ExecomMember[];
    computerSociety: ExecomMember[];
    wieSociety: ExecomMember[];
  };
}

const MemberCard = ({ member, index }: { member: ExecomMember; index: number }) => (
  <BlurFade key={member.id} delay={0.1 * index} inView>
    <div className="group relative rounded-2xl p-4 sm:p-6 border border-[rgb(32,32,32)] hover:border-[rgb(54,54,54)] transition-all duration-300 hover:scale-105">
      {/* Spotlight Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Member Image */}
      <div className="relative w-full aspect-square mb-3 sm:mb-4 overflow-hidden rounded-xl">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      {/* Member Info */}
      <div className="relative z-10">
        <h3 className="text-white text-base sm:text-lg lg:text-xl font-jetbrains-mono font-semibold mb-1 sm:mb-2 tracking-tight">
          {member.name}
        </h3>
        <p className="text-gray-300 text-xs sm:text-sm font-jetbrains-mono mb-3 sm:mb-4 opacity-80">
          {member.position}
        </p>
        
        {/* Contact Links */}
        <div className="flex gap-2 sm:gap-3 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {member.email && (
            <a
              href={`mailto:${member.email}`}
              className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 bg-blue-500 hover:bg-blue-600 rounded-full transition-colors duration-200"
              title="Email"
            >
              <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
            </a>
          )}
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 bg-blue-700 hover:bg-blue-800 rounded-full transition-colors duration-200"
              title="LinkedIn"
            >
              <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd"></path>
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  </BlurFade>
);

export default function Execom() {
  const data = execomData as ExecomData;
  
  return (
    <BlurFade delay={0.25} inView>
      <Wrapper curIndex={2}>
        <div className="w-full min-h-screen flex flex-col p-4 sm:p-6 md:p-8 lg:p-20">
          {/* Main Title */}
          <BlurFade delay={0.4} inView>
            <div className="flex w-full h-16 sm:h-20 justify-between items-center mt-4 sm:mt-6 lg:mt-8 mb-6 sm:mb-8 lg:mb-12">
              <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl font-jetbrains-mono tracking-tighter">
                Execom Members
              </h1>
            </div>
          </BlurFade>
          
          {/* Core Committee Section */}
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-white text-lg sm:text-xl lg:text-2xl font-jetbrains-mono font-semibold mb-4 sm:mb-6 lg:mb-8 tracking-tight">
              Core Committee
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {data.execomMembers.coreCommittee.map((member, index) => (
                <MemberCard key={member.id} member={member} index={index} />
              ))}
            </div>
          </div>

          {/* Oceanic Society Section */}
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-white text-lg sm:text-xl lg:text-2xl font-jetbrains-mono font-semibold mb-4 sm:mb-6 lg:mb-8 tracking-tight">
              Oceanic Society
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {data.execomMembers.oceanicSociety.map((member, index) => (
                <MemberCard key={member.id} member={member} index={index} />
              ))}
            </div>
          </div>

          {/* Computer Society Section */}
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-white text-lg sm:text-xl lg:text-2xl font-jetbrains-mono font-semibold mb-4 sm:mb-6 lg:mb-8 tracking-tight">
              Computer Society
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {data.execomMembers.computerSociety.map((member, index) => (
                <MemberCard key={member.id} member={member} index={index} />
              ))}
            </div>
          </div>

          {/* Women in Engineering (WIE) Section */}
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-white text-lg sm:text-xl lg:text-2xl font-jetbrains-mono font-semibold mb-4 sm:mb-6 lg:mb-8 tracking-tight">
              Women in Engineering (WIE)
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {data.execomMembers.wieSociety.map((member, index) => (
                <MemberCard key={member.id} member={member} index={index} />
              ))}
            </div>
          </div>
        </div>
      </Wrapper>
    </BlurFade>
  );
}