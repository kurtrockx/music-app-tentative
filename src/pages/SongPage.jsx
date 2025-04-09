import MainContainer from "../components/layout/MainContainer";
import SectionContainer from "../components/layout/SectionContainer";
import SongList from "../components/layout/SongList";
import Navbar from "../components/Navbar";
import Song from "../components/Song";
import TopSearchSong from "../components/TopSearchSong.jsx";

export default function SongPage({ songs }) {
  return (
    <MainContainer className={"flex flex-col justify-between"}>
      <Navbar />
      <SectionContainer className={"flex h-10/12 flex-col gap-2"}>
        <div className="flex">
          <TopSearchSong />
        </div>
        <SongList>
          {songs.map((song) => (
            <Song song={song} key={song.id} />
          ))}
        </SongList>
      </SectionContainer>
    </MainContainer>
  );
}
