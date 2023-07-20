import React from 'react';
import styles from './Description.module.css'

export default function RecipeAuthor() {
let authorLink = "https://thecozycook.com/chicken-and-dumplings/";
let authorPhoto = "https://thecozycook.com/wp-content/uploads/2021/11/The-Cozy-Cook-1-966x1536.jpg";
let authorName = "Stephanie";
return (
  <div className = {styles.recipeAuthorBlock}>
     <img src={authorPhoto} alt = "Photo of the recipe author" className={styles.imageUpdates} />
     <div>
        <h3>{authorName}</h3>
        <a href={authorLink}>The Cozy Cook</a> 
     </div>
  </div>
);

}

