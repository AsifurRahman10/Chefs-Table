import PropTypes from "prop-types";
import CurrentlyCookingRow from "../CurrentlyCookingRow/CurrentlyCookingRow";

const CurrentlyCooking = ({ sentForCook, totalTime, totalCalories }) => {
  return (
    <div className="mt-4">
      <h2 className="font-semibold text-2xl text-center">
        Currently cooking: {sentForCook.length}
      </h2>
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
              {sentForCook.map((item, idx) => (
                <CurrentlyCookingRow
                  index={idx}
                  key={idx}
                  item={item}
                ></CurrentlyCookingRow>
              ))}

              <tr>
                <td></td>
                <td></td>
                <td>Total time : {totalTime}</td>
                <td>Total Calories : {totalCalories}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CurrentlyCooking;

CurrentlyCooking.propTypes = {
  sentForCook: PropTypes.object.isRequired,
  totalCount: PropTypes.array.isRequired,
  totalTime: PropTypes.number.isRequired,
  totalCalories: PropTypes.number.isRequired,
};
