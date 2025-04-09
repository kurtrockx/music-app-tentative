export default function Song({ song }) {
  return (
    <article className="flex cursor-pointer items-center rounded-xl active:bg-black/20 hover:bg-white/5">
      <img
        src="https://images.steamusercontent.com/ugc/2077905881206873656/414B28E2E20E69B3F123A3D900889CC23C928017/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"
        alt="song image"
        className="block size-24 rounded-tl-xl rounded-bl-xl object-cover"
      />
      <div className="flex h-full flex-1 flex-col rounded-tr-xl rounded-br-xl bg-gradient-to-b from-transparent from-20% to-black/20 px-4 py-2 duration-500">
        <h1 className="text-white">
          {song.title} <span className="text-sm">({song.album})</span>
        </h1>
        <h2 className="text-sm text-white/80">{song.artist}</h2>
      </div>
    </article>
  );
}
