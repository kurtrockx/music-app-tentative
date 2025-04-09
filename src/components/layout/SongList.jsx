export default function SongList({ children }) {
  return (
    <div className="songList grid h-full grid-cols-2 gap-2 overflow-y-auto bg-gradient-to-b from-stone-950/20 to-transparent px-4 py-2">
      {children}
    </div>
  );
}
