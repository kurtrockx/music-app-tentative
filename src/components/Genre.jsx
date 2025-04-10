import { useEffect } from "react";
import SectionContainer from "../components/layout/SectionContainer";
import Loader from "../components/Loader.jsx";

export default function Genre({ accessToken }) {
  console.log(accessToken);
  useEffect(() => {
    if (!accessToken) return;

    const controller = new AbortController();
    const { signal } = controller;

    const fetchGenres = () => {
      fetch(
      `https://api.spotify.com/v1/recommendations/available-genre-seeds`,
      {
        headers: {
        Authorization: `Bearer ${accessToken}`,
        },
        signal,
      },
      )
      .then((res) => {
        if (!res.ok) {
        return res.text().then((text) => {
          throw new Error(`Request failed: ${res.status} - ${text}`);
        });
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        if (error.name === "AbortError") return;
        console.error("Error:", error);
      });
    };

    fetchGenres();

    return function () {
      controller.abort();
    };
  }, [accessToken]);

  const loader = true;

  return loader ? (
    <Loader />
  ) : (
    <SectionContainer
      className={"mt-auto flex h-10/12 flex-col gap-2"}
    ></SectionContainer>
  );
}
