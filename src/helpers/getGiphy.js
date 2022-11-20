export const getGiphy = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=S0q6f9tpCpRfYE4dQPQmxjGLRaaFYCuW&limit=10&q=${category}`;

  const response = await fetch(url);

  const { data = [] } = await response.json();

  const gifs = data.map((element) => ({
    id: element.id,
    url: element.images.downsized_medium.url,
    title: element.title,
  }));


  return gifs;
};
