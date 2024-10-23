import { useState } from "react";
import { Recipe } from "../Recipe.jsx/Recipe";
import { useEffect } from "react";

export const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch("Recipes.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);
  return (
    <div className="mt-14 lg:mt-24">
      <div className="lg:w-8/12 mx-auto text-center space-y-4 mb-10">
        <h2 className="font-semibold text-4xl">Our Recipes</h2>
        <p className="text-[#736d80]">
          Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus
          vulputate netus pharetra rhoncus. Eget urna volutpat curabitur
          elementum mauris aenean neque.{" "}
        </p>
      </div>
      {/* layout */}
      <div className="flex lg:flex-row flex-col">
        <div className="grid gap-4 items-center grid-cols-1 lg:grid-cols-2 mb-10">
          {recipes.map((recipe) => (
            <Recipe key={recipe.id} recipe={recipe}></Recipe>
          ))}
        </div>
        <div>Checkout</div>
      </div>
    </div>
  );
};
