export default function TopSearchSong({ song }) {
  const { name } = song;
  const artists = song.artists.map((artist) => artist.name).join(", ");
  const image = song.album.images[1].url;
  const duration = (song.duration_ms / 1000 / 60)
    .toFixed(2)
    .split(".")
    .join(":");
  const releaseDate = new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(song.album.release_date));

  return (
    <article className="col-span-2 flex h-48 w-full cursor-pointer place-self-end overflow-hidden rounded-xl bg-black/40 text-white hover:bg-white/10 active:bg-black">
      <img src={image} alt="song image" className="block object-cover" />
      <div className="flex h-full flex-1 flex-col bg-gradient-to-br from-transparent from-20% to-white/4 px-4 py-6 duration-500">
        <h1 className="text-4xl font-semibold text-white">{name}</h1>
        <h2 className="text-base text-white/40">{releaseDate}</h2>
        <h3 className="text-white/80">Artists: {artists}</h3>
        <p className="mt-auto self-end text-sm">Duration: {duration}</p>
      </div>
    </article>
  );
}
