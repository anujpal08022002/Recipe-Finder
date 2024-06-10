import React from "react";

const RecipeCard = ({ recipe }) => {
  return (
    <div
      className="bg-white shadow-lg rounded-lg 
						overflow-hidden hover:shadow-xl 
						transition-transform hover:scale-105"
    >
      <div className="relative">
        <img
          className="w-full h-48 object-cover 
							object-center rounded-t-lg"
          src={recipe.image}
          alt={recipe.label}
        />
        <div
          className="absolute top-2 left-2 bg-indigo-500 
								text-white py-1 px-2 rounded"
        >
          {recipe.dishType[0]}
        </div>
      </div>
      <div className="p-4">
        <h1
          className="text-2xl font-semibold text-gray-800 
							mb-2 capitalize"
        >
          {recipe.label}
        </h1>
        <div className="text-gray-600 mb-4">
          <span className="block mb-1">
            <b>Ingredients:</b>
          </span>
          {recipe.ingredientLines.map((ingredient, index) => (
            <span key={index} className="block pl-4">
              {ingredient}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <a
            href={recipe.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-500 font-semibold 
								hover:underline"
          >
            View Recipe
          </a>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
