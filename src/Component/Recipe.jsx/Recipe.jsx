import PropTypes from "prop-types";

export const Recipe = ({ recipe, handleWantToCook }) => {
  const {
    recipe_id,
    recipe_name,
    recipe_img,
    short_description,
    ingredients,
    preparing_time,
    calories,
  } = recipe;
  return (
    <div>
      <div className="card shadow-xl lg:h-[700px]">
        <figure className="px-6 pt-10">
          <img
            src={recipe_img}
            alt="Shoes"
            className="h-[300px] w-full rounded-xl"
          />
        </figure>
        <div className="card-body pt-4 px-6">
          <h2 className="card-title">{recipe_name}</h2>
          <p className="text-[#878787]">{short_description}</p>
          <hr />
          <h3 className="text-[#282828] font-medium">
            Ingredients: {ingredients.length}
          </h3>
          <ul className="list-disc ml-5 text-[#878787] font-normal">
            {ingredients.map((ingredients, idx) => (
              <li key={idx}>{ingredients}</li>
            ))}
          </ul>
          <hr />
          <div className="flex justify-between">
            <div className="space-x-2">
              <i className="fa-regular fa-clock"></i>
              <span>{preparing_time}</span>
            </div>
            <div className="space-x-2">
              <i className="fa-solid fa-fire-flame-simple"></i>
              <span>{calories} calories</span>
            </div>
          </div>
          <div className="card-actions">
            <button
              onClick={() => handleWantToCook(recipe_id)}
              className="btn bg-[#0BE58A] rounded-full"
            >
              Want to Cook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Recipe.propTypes = {
  recipe: PropTypes.shape({
    recipe_name: PropTypes.string.isRequired,
    recipe_img: PropTypes.string.isRequired,
    short_description: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
    preparing_time: PropTypes.string.isRequired,
    calories: PropTypes.number.isRequired,
  }).isRequired,
};
