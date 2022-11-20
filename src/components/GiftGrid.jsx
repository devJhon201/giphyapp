import { useFetchGiphy } from "../hooks/useFetchGiphy";
import { GiftItem } from "./GiftItem";

export const GiftGrid = ({ category }) => {
  const { images, isLoading } = useFetchGiphy(category);

  return (
    <>
      <h3>{category}</h3>
      {isLoading && <h2>Cargando...</h2>}
      <div className="card-grid">
        {images.map((element) => (
          <GiftItem key={element.id} {...element} />
        ))}
      </div>
    </>
  );
};
