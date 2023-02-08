import { useState } from 'react';
import { AddCategory } from './Components/AddCategory';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    'Attack of titans',
    'Sword art online',
  ]);

  const onAddCategory = (category) => {
    if (categories.includes(category)) return;
    setCategories([category, ...categories]);
  };

  return (
    <>
      {/* Titulo */}
      <h1>GifExpertAPP</h1>

      {/* Buscador */}
      <AddCategory
        //   setCategories={setCategories}
        onNewCategory={onAddCategory}
      />

      {/* Listado de gifs */}
      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </>
  );
};
