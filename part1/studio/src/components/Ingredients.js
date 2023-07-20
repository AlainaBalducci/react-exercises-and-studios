import React from "react";
import styles from "./Ingredients.module.css";

export default function RecipeIngredients() {
  let ingredients = [
    "2 lbs. bone-in skinless chicken breast",
    "1 small yellow onion, diced",
    "1 cup carrots, diced",
    "2 sticks celery, diced",
    "4 ½ cups chicken broth",
  ];
  return (
    <div>
      <h3>Recipe Ingredients</h3>
      <ul className={styles.ingredientList}>
        <li>{ingredients[0]}</li>
        <li>{ingredients[1]}</li>
        <li>{ingredients[2]}</li>
        <li>{ingredients[3]}</li>
        <li>{ingredients[4]}</li>
      </ul>
    </div>
  );
}
