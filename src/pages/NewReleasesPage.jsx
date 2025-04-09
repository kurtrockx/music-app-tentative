import MainContainer from "../components/layout/MainContainer";
import SectionContainer from "../components/layout/SectionContainer";
import SongList from "../components/layout/SongList";
import Loader from "../components/Loader";
import Song from "../components/Song";

export default function NewReleasesPage({ initialSongs }) {
  return !initialSongs.length ? (
    <Loader />
  ) : (
    <SectionContainer className={"mt-auto flex h-10/12 flex-col gap-2"}>
      <h1 className="font-bold text-white">New Releases</h1>
      <SongList>
        {initialSongs.map((song) => (
          <Song song={song} key={song.id} newRelease={true} />
        ))}
      </SongList>
    </SectionContainer>
  );
}
