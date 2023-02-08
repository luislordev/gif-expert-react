import { useState } from 'react';
import { AddCategory, GifGrid } from './Components';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Attack of titans']);

  const onAddCategory = (category) => {
    if (categories.includes(category)) return;
    setCategories([category, ...categories]);
  };

  return (
    <>
      <h1>GifExpertAPP</h1>

      <AddCategory onNewCategory={onAddCategory} />

      {categories.map((category) => {
        return <GifGrid key={category} category={category} />;
      })}
    </>
  );
};
