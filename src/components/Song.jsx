export default function Song({ song, newRelease = false }) {
  const { name } = song;
  const artists = song.artists.map((artist) => artist.name).join(", ");
  const image = newRelease ? song.images[2].url : song.album.images[1].url;
  const duration = newRelease
    ? ""
    : (song.duration_ms / 1000 / 60).toFixed(2).split(".").join(":");

  return (
    <article className="flex cursor-pointer items-center rounded-xl hover:bg-white/5 active:bg-black/20">
      <img
        src={image}
        alt={name}
        className="block size-24 rounded-tl-xl rounded-bl-xl object-cover"
      />
      <div className="flex h-full flex-1 flex-col rounded-tr-xl rounded-br-xl bg-gradient-to-b from-transparent from-20% to-black/20 px-4 py-2 duration-500">
        <h1 className="line-clamp-1 max-w-[80%] text-lg font-medium text-white">
          {name}
        </h1>
        <h3 className="text-xs text-white/80">Artist: {artists}</h3>
        <p className="mt-auto self-end text-xs text-white">{duration}</p>
      </div>
    </article>
  );
}
