export default function Logo({ height, className }) {
  return (
    <div className="flex items-center gap-2">
      <img
        src="logo.png"
        alt="mlogo"
        className={`${className}`}
        style={{ height: height }}
      />
    </div>
  );
}
