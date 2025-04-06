import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/">
      <div className="flex items-center gap-2">
        <img src="logo.png" alt="mlogo" className="h-12" />
        <h1 className="font-bold text-white">Music App</h1>
      </div>
    </Link>
  );
}
