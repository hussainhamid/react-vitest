import { useState, useEffect } from "react";
import "./App.css";

const useImageUrl = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos", { mode: "cors" })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server Error");
        }
        return response.json();
      })
      .then((response) => setImageUrl(response[0].url))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return { imageUrl, loading, error };
};

const Image = () => {
  const { imageUrl, loading, error } = useImageUrl();

  if (loading) return <p>...loading</p>;
  if (error) return <p>An error occured!</p>;

  return (
    imageUrl && (
      <>
        <h1>an image</h1>
        <img src={imageUrl} />
      </>
    )
  );
};

export default Image;
