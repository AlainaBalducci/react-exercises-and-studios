import React from "react";
import styles from './Description.module.css';

export default function RecipePhoto() {
  return (
    <img
      src="https://thecozycook.com/wp-content/uploads/2021/12/Chicken-and-Dumplings-Recipe.jpg"
      alt="recipe photo"
      className={styles.imageUpdates}
    />
  );
}
