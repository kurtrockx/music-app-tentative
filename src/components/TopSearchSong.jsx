export default function TopSearchSong() {
  return (
    <article className="col-span-2 flex h-48 w-1/2 place-self-end overflow-hidden rounded-xl bg-black text-white">
      <img
        src="https://images.steamusercontent.com/ugc/2077905881206873656/414B28E2E20E69B3F123A3D900889CC23C928017/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"
        alt="song image"
        className="block object-cover"
      />
      <div className="flex h-full flex-1 flex-col bg-gradient-to-b from-transparent from-20% to-black/20 px-4 py-2 duration-500">
        <h1 className="text-white">
          Sample Title <span className="text-sm">(Song Album)</span>
        </h1>
        <h2 className="text-sm text-white/80">Sample Artist</h2>
      </div>
    </article>
  );
}
