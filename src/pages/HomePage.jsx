import Button from "../components/Button";
import Logo from "../components/Logo";
import MainContainer from "../components/layout/MainContainer";
import SectionContainer from "../components/layout/SectionContainer";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";

export default function Homepage({ isLoading }) {
  return isLoading ? (
    <Loader />
  ) : (
    <SectionContainer className={"mt-20 space-y-4 max-md:mt-8 px-4"}>
      <Logo height={400} className={"mx-auto max-md:max-h-40"} />
      <h1 className="text-center text-7xl font-bold text-white max-sm:text-5xl">
        MUSIC APP
      </h1>
      <p className="mx-auto max-w-2xl text-center text-sm text-white max-sm:text-xs">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus
        labore harum nesciunt necessitatibus eius et non corporis! Rem sapiente
        voluptas in quo nihil, beatae iste accusamus laborum minima odit ullam.
        Saepe blanditiis odio accusamus totam eum, sed aspernatur eveniet quae
        amet ducimus sapiente illum itaque, fugiat aperiam quas quasi aliquam
        distinctio, consectetur sequi perferendis? Itaque mollitia in voluptatem
        enim commodi.
      </p>
      <Link to="/newRelease">
        <Button className={"mx-auto"}>Get Started</Button>
      </Link>
    </SectionContainer>
  );
}
