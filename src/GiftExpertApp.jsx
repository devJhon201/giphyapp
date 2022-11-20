import { useState } from "react";
import { AddCategory, GiftGrid } from "./components";

const GiftExpertApp = () => {
  const [categories, setCategories] = useState(["Colombia"]);

  const handleNewCategory = (newCategory) => {
    const alreadyExists = categories.some((element) => {
      return element.toLowerCase() === newCategory.toLowerCase();
    });

    if (alreadyExists) return;

    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GiftExpertApp</h1>

      <AddCategory handleNewCategory={handleNewCategory} />

      {categories.map((category) => {
        return <GiftGrid key={category} category={category} />;
      })}
    </>
  );
};

export default GiftExpertApp;
