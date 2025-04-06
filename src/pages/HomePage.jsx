import Logo from "../components/Logo";
import MainContainer from "../components/MainContainer";
import Navbar from "../components/Navbar";

export default function Homepage() {
  return (
    <div className="bg-zinc-900">
      <MainContainer>
        <Navbar />
        <Logo height={400} className={"mx-auto"} />
        <h1 className="text-center text-4xl font-bold text-white">MUSIC APP</h1>
      </MainContainer>
    </div>
  );
}
