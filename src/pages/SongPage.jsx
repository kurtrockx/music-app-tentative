import MainContainer from "../components/layout/MainContainer";
import SectionContainer from "../components/layout/SectionContainer";
import SongList from "../components/layout/SongList";
import Navbar from "../components/Navbar";
import Song from "../components/Song";

export default function SongPage({ songs }) {
  return (
    <MainContainer className={"flex flex-col justify-between"}>
      <Navbar />
      <SectionContainer className={"flex h-10/12 flex-col"}>
        <div className="h-12"></div>
        <SongList>
          {songs.map((song) => (
            <Song song={song} key={song.id} />
          ))}
        </SongList>
      </SectionContainer>
    </MainContainer>
  );
}
