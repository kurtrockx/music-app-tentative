import Button from "../components/Button";
import Logo from "../components/Logo";
import SectionContainer from "../components/layout/SectionContainer";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <SectionContainer className={"mt-20 space-y-4 px-4 max-md:mt-8"}>
      <Logo height={400} className={"mx-auto max-md:max-h-46 max-xl:max-h-56"} />
      <h1 className="text-center text-7xl font-bold text-white max-sm:text-5xl">
        MUSIC APP
      </h1>
      <p className="mx-auto max-w-2xl text-center text-sm text-white max-sm:text-xs">
        This is just an app that uses the Spotify public api, meaning that the
        features are heavily limitted. This is by choice though as the goal of
        this app was to just explore how react-router-dom works.
      </p>
      <Link to="/newRelease">
        <Button className={"mx-auto"}>Get Started</Button>
      </Link>
    </SectionContainer>
  );
}
