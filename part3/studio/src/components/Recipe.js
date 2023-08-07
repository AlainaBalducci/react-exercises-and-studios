const RecipeAuthor = () => {
   let authorLink = "https://thecozycook.com/";
   let authorPhoto = "https://thecozycook.com/wp-content/uploads/2021/11/The-Cozy-Cook-1-966x1536.jpg";
   let authorName = "Stephanie";

   return (
      <div>
         <img src={authorPhoto} alt = "Picture of Stephanie the cozy cook" style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = ["Chicken Breast", "Chicken Broth", "Vegetables", "Seasoning", "Bisquick"];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1>Chicken and Dumplings</h1>
            <p>This Chicken and Dumplings recipe is easy to make with homemade dumplings or refrigerated biscuits right on the stove top. Your family will love this simple comfort food dinner!</p>
         </div>
         <div className="recipePhotoBlock">
            <RecipePhoto />
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://thecozycook.com/wp-content/uploads/2021/12/Chicken-and-Dumplings-Recipe.jpg" alt="Picture of finished chicken and dumpling soup" className="imageUpdates"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         
         <div>
            <RecipeDescription />
            
         </div>
      </div>
   );
}