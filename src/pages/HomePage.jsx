import Button from "../components/Button";
import Logo from "../components/Logo";
import MainContainer from "../components/layout/MainContainer";
import Navbar from "../components/Navbar";
import SectionContainer from "../components/layout/SectionContainer";
import Loader from "../components/Loader";

export default function Homepage({ songs, isLoading }) {
  return (
    <MainContainer className={"space-y-20"}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <SectionContainer className={"space-y-4"}>
            <Logo height={400} className={"mx-auto"} />
            <h1 className="text-center text-7xl font-bold text-white">
              MUSIC APP
            </h1>
            <p className="mx-auto max-w-2xl text-center text-sm text-white">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repellendus labore harum nesciunt necessitatibus eius et non
              corporis! Rem sapiente voluptas in quo nihil, beatae iste
              accusamus laborum minima odit ullam. Saepe blanditiis odio
              accusamus totam eum, sed aspernatur eveniet quae amet ducimus
              sapiente illum itaque, fugiat aperiam quas quasi aliquam
              distinctio, consectetur sequi perferendis? Itaque mollitia in
              voluptatem enim commodi.
            </p>
            <Button className={"mx-auto"}>Get Started</Button>
          </SectionContainer>
        </>
      )}
    </MainContainer>
  );
}
