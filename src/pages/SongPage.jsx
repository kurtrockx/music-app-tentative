import MainContainer from "../components/layout/MainContainer";
import SectionContainer from "../components/layout/SectionContainer";
import Navbar from "../components/Navbar";

export default function SongPage({songs}) {
  return (
    <div className="bg-zinc-900">
      <MainContainer>
        <Navbar />
        <SectionContainer
          className={"grid grid-cols-2 gap-2"}
        >
        
        </SectionContainer>
      </MainContainer>
    </div>
  );
}