export default function SongList({ children }) {
  return (
    <div className="grid h-full grid-cols-2 gap-2 overflow-y-auto px-4 py-2 songList">
      {children}
    </div>
  );
}
