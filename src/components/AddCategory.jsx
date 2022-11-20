import { useState } from "react";

export const AddCategory = ({ handleNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const handleAddCategory = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) {
      return;
    }
    handleNewCategory(inputValue.trim())
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={handleAddCategory}
        value={inputValue}
        placeholder="Buscar GIFT"
      />
    </form>
  );
};
