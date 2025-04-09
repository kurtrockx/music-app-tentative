import { useEffect, useState } from "react";

export default function useSpotifyToken(base64Credentials) {
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    // Retrieve stored expiration time from localStorage
    const existingExpirationTime = localStorage.getItem("expirationTime");

    // Function to check if the token is expired
    function isTokenExpired() {
      return Date.now() > Number(existingExpirationTime);
    }

    // Function to fetch a new access token
    function fetchNewAccessToken() {
      fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
          Authorization: `Basic ${base64Credentials}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: "grant_type=client_credentials",
      })
        .then((response) => response.json())
        .then((data) => {
          const newAccessToken = data.access_token;
          const expiresIn = data.expires_in;

          // Set new access token and expiration time
          setAccessToken(newAccessToken);
          const newExpirationTime = Date.now() + expiresIn * 1000;

          // Store access token and expiration time in localStorage
          localStorage.setItem("accessToken", newAccessToken);
          localStorage.setItem("expirationTime", newExpirationTime);
        })
        .catch((error) =>
          console.error("Error fetching new access token:", error),
        );
    }

    // If no access token exists or if the token is expired, fetch a new one
    if (!accessToken || isTokenExpired()) {
      fetchNewAccessToken();
    } else {
      // Use the stored access token if it's not expired
      const storedAccessToken = localStorage.getItem("accessToken");
      if (storedAccessToken) {
        setAccessToken(storedAccessToken);
      }
    }
  }, [base64Credentials, accessToken]); // Only depend on base64Credentials

  return accessToken;
}
