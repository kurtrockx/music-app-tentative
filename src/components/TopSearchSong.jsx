export default function TopSearchSong() {
  return (
    <article className="col-span-2 flex h-48 w-1/2 cursor-pointer place-self-end overflow-hidden rounded-xl bg-black/40 text-white hover:bg-white/10 active:bg-black">
      <img
        src="https://images.steamusercontent.com/ugc/2077905881206873656/414B28E2E20E69B3F123A3D900889CC23C928017/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"
        alt="song image"
        className="block object-cover"
      />
      <div className="flex h-full flex-1 flex-col bg-gradient-to-b from-transparent from-40% to-white/2 px-4 py-6 duration-500">
        <h1 className="text-4xl text-white">Sample Title</h1>
        <h2 className="text-base text-white/40">Album: (Alumni)</h2>
        <h3 className="text-white/80">Artists: Sample Artist</h3>
        <p className="mt-auto self-end text-sm">Duration: 3:54</p>
      </div>
    </article>
  );
}
