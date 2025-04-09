import logoIcon from "../assets/logo.png";

export default function Logo({ height, className }) {
  return (
    <div className="flex items-center gap-2">
      <img
        src={logoIcon}
        alt="mlogo"
        className={`${className}`}
        style={{ height: height }}
      />
    </div>
  );
}
