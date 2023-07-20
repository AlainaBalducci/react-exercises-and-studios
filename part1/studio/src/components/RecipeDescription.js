import React from "react";
import RecipeAuthor from "./Description";

class RecipeDescription extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h1>Chicken and Dumplings</h1>
          <p>If you're looking for the best homemade recipe for Chicken and Dumplings, you've come to the right place. This thick and creamy chicken soup is loaded with so much cozy flavor, and it's topped with perfectly cooked, light and airy dumplings.</p>
        </div>
        <RecipeAuthor />
      </div>
    );
  }
}

export default RecipeDescription;