import { useEffect, useState } from "react";
import { getGiphy } from "../helpers/getGiphy";

export const useFetchGiphy = (category) => {
  const [images, setImages] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const newImages = async () => {
    const giphyResponse = await getGiphy(category);
    setImages(giphyResponse);
    setIsLoading(false)
  };

  useEffect(() => {
    newImages();
  }, []);

  return {
    images,
    isLoading,
  };
};
