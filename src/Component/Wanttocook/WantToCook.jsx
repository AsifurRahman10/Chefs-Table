import PropTypes from "prop-types";
import { WantToCookRow } from "../WantToCookRow/WantToCookRow";

const WantToCook = ({ addToCook }) => {
  // cons t { recipe_name, preparing_time, calories } = addToCook;
  return (
    <div className="mt-4">
      <h2 className="font-semibold text-2xl text-center">Want to cook: 01</h2>
      <hr className="w-2/3 mx-auto my-2" />
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Time</th>
                <th>Calories</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {addToCook.map((item, idx) => (
                <WantToCookRow key={idx} item={item}></WantToCookRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

WantToCook.propTypes = {
  addToCook: PropTypes.array.isRequired,
};

export default WantToCook;
